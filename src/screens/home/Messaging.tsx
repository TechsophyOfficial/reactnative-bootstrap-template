import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import io from 'socket.io-client';
import PrimaryButton from '../../components/PrimaryButton';
import ScreenHeader from '../../components/ScreenHeader';

import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import useOnlyKeycloak from '../../hooks/useOnlyKeycloak';
import useTheme from '../../hooks/useTheme';
import {SXP, SXPCommands} from '../../util/constants';

const Messaging = () => {
  const {keycloak} = useOnlyKeycloak();
  const theme = useTheme();
  const userRef = useRef('vinod.g@techsophy.com');

  const [message, setMessage] = useState('');
  const [quickBtnList, setQuickBtnList] = useState([]);
  const [showQuickBtns, setShowQuickBtns] = useState(false);
  const flatListRef = useRef<FlatList | null>(null);

  const [chatMsgObj, setChatMsgObj] = useState([
    {actor: 'Bot', message: 'Welcome to KIMS / కిమ్స్‌కు స్వాగతం'},
  ]);

  const socket: any = useRef();

  const msgRel = useCallback((obj: any) => {
    console.log('emit', obj);
    socket.current.emit('message', obj);
  }, []);

  const initialMsgObj = useMemo(
    () => ({
      userId: userRef.current,
      message: 'hi',
      appId: SXP.appId,
      projectId: SXP.pid,
      version: SXP.version,
    }),
    []
  );

  const restartConv = useMemo(
    () => ({
      userId: userRef.current,
      message: SXPCommands.restart,
      appId: SXP.appId,
      projectId: SXP.pid,
      version: SXP.version,
    }),
    []
  );

  useEffect(() => {
    if (SXP.path) {
      socket.current = io(SXP.url, {path: SXP.path});
    } else {
      socket.current = io(SXP.url);
    }

    socket.current.on('joined', (userId: any) => {
      console.log('joined', userId);
      msgRel(initialMsgObj);
    });

    socket.current.on('connect', async () => {
      console.log('connected');
      socket.current.emit('join', {
        userId: userRef.current,
        accessToken: `Bearer ${keycloak?.token}`,
        projectId: SXP.pid,
      });
    });

    socket.current.on('disconnect', () => {
      console.log('disconnecting socket');
    });

    socket.current.on('message', (data: any) => {
      console.log('data', data);
      flatListRef.current?.scrollToEnd({animated: true});
      setChatMsgObj((oldChatMsgObj: any) => [...oldChatMsgObj, data]);
      if (data.type === 'BUTTON') {
        setQuickBtnList(data.buttonFields);
        setShowQuickBtns(true);
      }
    });
    return () => {
      msgRel(restartConv);
      socket.current.removeAllListeners();
      return socket.current.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMsg = useCallback(
    (actor: any, msg: any) => {
      const createdObj = {
        userId: userRef.current,
        message: msg,
        appId: SXP.appId,
        projectId: SXP.pid,
        version: SXP.version,
      };
      msgRel(createdObj);
      const updateUser = {message: msg, actor: 'you'};
      setChatMsgObj((oldChatMsgObj: any) => {
        return [...oldChatMsgObj, updateUser];
      });
      setMessage('');
      flatListRef.current?.scrollToEnd();
    },
    [msgRel]
  );

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <ScreenHeader text={'Messaging'} navigation={undefined} />
      <FlatList
        ref={flatListRef}
        data={chatMsgObj}
        style={{
          flex: 1,
          marginHorizontal: theme.spacing / 2,
          marginTop: theme.spacing,
        }}
        renderItem={({item}) => {
          const send = item.actor === 'you';
          return (
            <View
              style={{
                overflow: 'hidden',
                flexDirection: 'row',
              }}>
              {send && <View style={{flex: 1}} />}
              <Text
                style={{
                  color: send ? theme.colors.text : theme.colors.lightText,
                  backgroundColor: send
                    ? theme.colors.lightPrimary
                    : theme.colors.darkPrimary,
                  padding: theme.spacing / 2,
                  marginVertical: theme.spacing / 4,
                  textAlign: send ? 'right' : 'left',
                  borderRadius: theme.roundness,
                  maxWidth: wp(60),
                }}>
                {item.message}
              </Text>
              {!send && <View style={{flex: 1}} />}
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: theme.spacing,
          backgroundColor: theme.colors.surface,
          elevation: 4,
        }}>
        <TextInput
          style={{flex: 1}}
          placeholder={'Type message here ...'}
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={() => {
            if (message.length > 0) {
              sendMsg('you', message);
            }
          }}
        />
        <PrimaryButton
          style={{
            paddingHorizontal: theme.spacing,
            marginLeft: theme.spacing,
          }}
          disabled={message.length === 0}
          text={'Send'}
          onPress={() => {
            sendMsg('you', message);
          }}
        />
      </View>
    </View>
  );
};

export default Messaging;

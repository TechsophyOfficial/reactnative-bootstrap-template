import React, {useState, useRef} from 'react';
import {FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import PrimaryButton from '../../components/PrimaryButton';
import ScreenHeader from '../../components/ScreenHeader';

import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {dip} from '../../util/function';
import {LongLipsum} from '../../util/strings';

const Messaging = () => {
  const [messages, setMessages] = useState([
    {message: LongLipsum.substring(0, 20), send: false},
  ]);
  const theme = useTheme();
  const [sender, setSender] = useState('');
  const list = useRef<FlatList | null>(null);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <ScreenHeader text={'Messaging'} navigation={undefined} />
      <FlatList
        ref={list}
        data={messages}
        style={{
          flex: 1,
          marginHorizontal: theme.spacing / 2,
          marginTop: theme.spacing,
        }}
        renderItem={({item}) => {
          return (
            <View
              style={{
                overflow: 'hidden',
                flexDirection: 'row',
              }}>
              {item.send && <View style={{flex: 1}}></View>}
              <Text
                style={{
                  color: item.send ? theme.colors.text : theme.colors.lightText,
                  backgroundColor: item.send
                    ? theme.colors.lightPrimary
                    : theme.colors.darkPrimary,
                  padding: theme.spacing / 2,
                  marginVertical: theme.spacing / 4,
                  textAlign: item.send ? 'right' : 'left',
                  borderRadius: theme.roundness,
                  maxWidth: wp(60),
                }}>
                {item.message}
              </Text>
              {!item.send && <View style={{flex: 1}}></View>}
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
          value={sender}
          onChangeText={setSender}
        />
        <PrimaryButton
          style={{
            paddingHorizontal: theme.spacing,
            marginLeft: theme.spacing,
          }}
          disabled={sender.length === 0}
          text={'Send'}
          onPress={() => {
            setSender('');
            messages.push({message: sender, send: true});
            messages.push({
              message: LongLipsum.substring(
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 60)
              ),
              send: false,
            });
            if (list) {
              list.current?.scrollToEnd();
            }
          }}
        />
      </View>
    </View>
  );
};

export default Messaging;

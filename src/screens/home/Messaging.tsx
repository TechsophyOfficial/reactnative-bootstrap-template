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

import {useSXPChat} from 'ts-react-native-sxp';

// const token =
//   'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGUTYwSUxERkhIODJhVmxqRlJSaDVtVHRNcTVqUDc4YnBLVEdNb0dhMnpFIn0.eyJleHAiOjE2NzE1Mzk2MTMsImlhdCI6MTY3MTUzNzgxMywiYXV0aF90aW1lIjoxNjcxNTM3ODEyLCJqdGkiOiJmNGY2N2Y4OS1hOGM1LTRjYzItYTM4Mi04NzlhY2Q4NzczZmMiLCJpc3MiOiJodHRwczovL2F1dGgtZGV2LmtpbXMuaW4vYXV0aC9yZWFsbXMvdGVjaHNvcGh5LXBsYXRmb3JtIiwiYXVkIjpbImNhbXVuZGEtaWRlbnRpdHktc2VydmljZSIsImFjY291bnQiXSwic3ViIjoiNWY4YzljOTctYmRhMS00ZmNmLWFiMGEtZGVjMjRlYWM1MzRkIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHAtdWktY29yZSIsIm5vbmNlIjoiYzZiNGY2ZWUtNDM3OC00ZWFkLTg1YmMtOTQ2YWFmOTNlZDNjIiwic2Vzc2lvbl9zdGF0ZSI6IjU4YWNkZmZhLWY5MTAtNGJhOC1hZWM0LTM2ODk5OGQ5ZDAxNiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9hdXRoLWRldi5raW1zLmluIiwiKiIsImh0dHBzOi8vYXVnbW50LWRldi5raW1zLmluIiwiaHR0cHM6Ly9hcGktZGV2LmtpbXMuaW4iXSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBBdWdtbnQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJyYXZpIHJhamEgbXlsYXZhcmFwdSIsInByZWZlcnJlZF91c2VybmFtZSI6IjkxOTY2NjExODg3NiIsImdpdmVuX25hbWUiOiJyYXZpIHJhamEiLCJmYW1pbHlfbmFtZSI6Im15bGF2YXJhcHUiLCJlbWFpbCI6InJhdmltLm1AdGVjaHNvcGh5LmNvbSJ9.XFkDW7hWgkcQixMA7WGBMVPU4-zwywo52cezRKfyU8PsKAu1TK0HDy0eKoW6ElAEyqk6AwT5VZyU4zU4P3NMw2Q2k-clSyrjYF4Wep0nZRYcFyKJ0h0TVSCVFtF7u7EXuRvRz1cCEdn3UA0flg2Ip3OIvk86BwbGsKiHBhmrLh-eWiQlSj92e37HENrq0gc2fDeB9SP-fCn5KZ_affX_FAh9HtzT_O6SSCMYShEjIvkgYkP5RUI1s6Iq0Ak4nNSZy9FdxuFjHaAgNLoOzJwHSOXXy133r2hJ-qReiwS4aAcKbJqzs6AUsH9MEUiEg7XzA1nTqMMh3DtvLvta-MfgyQ';
const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2SVpMNGRlb3pjWUR6VjJPeFhpRGRXdzRiWkpEY3dITEVSWWRoU2hGNjRZIn0.eyJleHAiOjE2NzE1Mzg1MTgsImlhdCI6MTY3MTUzNzYxOCwiYXV0aF90aW1lIjoxNjcxNTM3NjEwLCJqdGkiOiJiMDU0ZTFmZi1hODRlLTRlOTctOGNhYS0zNGI2ZTk5MTI4NTciLCJpc3MiOiJodHRwczovL3N4cC5rZXljbG9hay1kZXYudGVjaHNvcGh5LmNvbS9hdXRoL3JlYWxtcy9zeHAtbWljcm9zZXJ2aWNlcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmY2UwY2Y2Ny1mOTg0LTQ3OTktYjE2YS00ZTFhNDZkMmJlM2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzeHAiLCJub25jZSI6IjNlMjljNTM3LTlmZTMtNGM2Mi04NzA4LWJmZDNmNTU0NDVhMiIsInNlc3Npb25fc3RhdGUiOiIyNGIyYzIxYS1iMThiLTRhNDctYjE0Mi1hOTNkNjJkYjg1ODYiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vc3hwLnYxLnRlY2hzb3BoeS5jb20iLCJodHRwczovL2pvbGx5LXN1bmRhZS1iZmZmMzkubmV0bGlmeS5hcHAiLCJraW1zOi8vb2F1dGgiLCJodHRwOi8vc3hwLmFkbWluLXVpLms4cy50ZWNoc29waHkuY29tIiwiaHR0cDovLzE3Mi4xNi4wLjE2MzozMDAxIiwiaHR0cDovL3N4cC5hZG1pbi1zZXJ2aWNlcy5rOHMudGVjaHNvcGh5LmNvbSIsImh0dHBzOi8vc3hwLnYxLmFkbWluLnRlY2hzb3BoeS5jb20iLCJodHRwOi8vbG9jYWxob3N0OjMwMDEiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtc3hwLW1pY3Jvc2VydmljZXMiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBzdXBlci1hZG1pbiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Ik5pdGhpbiBLdW1hciIsInByZWZlcnJlZF91c2VybmFtZSI6Im5pdGhpbi5nIiwiZ2l2ZW5fbmFtZSI6Ik5pdGhpbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJzdXBlckFkbWluIjp0cnVlLCJlbWFpbCI6Im5pdGhpbi5nQHRlY2hzb3BoeS5jb20ifQ.vGRjoS-W0Ut3sYT2zuhGMBXmStsduatTUGl_DxdXZJs02o00vQ_PQ2zA6xtJSGgMBKlxbBhSwIy1RahcoafNB0lzhwNp-HSGk462c0_QHjksnjemPoqMtuAybdtO9kvaqNF17aC-evZwtLKnsMtMmznmBggjqg1ZZAn2ln8-XNDuYx71dSii3h-9JaxzclAP_FP50O9EPTUxqkH8ByuaM2uZsaC9rsFKG5IiP77xHz_BM5UI-oLyQ_79057-Wq9MMHNdRaVhjkmZp-35y46CDW4702xgWu34k2EYDQn-AoA2Z6V3cgdvVXJ6Namz8Jj28v7PRR2cNkfzkML2gaBOtQ';

const Messaging = () => {
  const {keycloak, profile} = useOnlyKeycloak();
  const theme = useTheme();
  const userRef = useRef(profile?.email);

  const [message, setMessage] = useState('');

  const [showQuickBtns, setShowQuickBtns] = useState(false);
  const flatListRef = useRef<FlatList | null>(null);

  const [chatMsgObj, setChatMsgObj] = useState([
    {actor: 'Bot', message: 'Welcome to KIMS / కిమ్స్‌కు స్వాగతం'},
  ]);

  const sxpEvent = useCallback((type: string, data: any) => {
    console.log(type, data);
  }, []);

  const {quickBtnList, restart, sendMsg} = useSXPChat(
    SXP.url,
    SXP.path,
    keycloak?.token ?? '',
    SXP.pid,
    SXP.appId,
    SXP.version,
    sxpEvent
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
              sendMsg(message);
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
            sendMsg(message);
          }}
        />
      </View>
    </View>
  );
};

export default Messaging;

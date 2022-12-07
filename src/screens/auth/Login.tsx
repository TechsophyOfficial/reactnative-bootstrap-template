import {useKeycloak} from '@react-keycloak/native';
import KeycloakReactNativeClient from '@react-keycloak/native/lib/typescript/src/keycloak/client';
import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Alert from '../../components/Alert';
import BlankButton from '../../components/BlankButton';
import Checkbox from '../../components/Checkbox';
import IconButton from '../../components/IconButton';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {AuthComposite} from '../../navigation/AuthStack';
import {dip} from '../../util/function';
import {Apple, Google, Logo} from '../../util/icons';
import {
  AgreeText,
  AppleButton,
  ForgotPassword,
  GoogleButton,
  LoginButton,
  LoginHeading,
  LoginSubHeading,
  RegistrationError,
  SignUpPrompt,
  SkipButton,
  SocialLoginFailed,
  TermsAgreeError,
} from '../../util/strings';

type Props = AuthComposite<'Login'>;

const keycloakLogin = (
  keycloak: boolean | undefined | KeycloakReactNativeClient,
  type: string
) => {
  return new Promise<boolean>((resolve, reject) => {
    if (keycloak === undefined || keycloak === true || keycloak === false) {
      reject('Not Initialized');
      return;
    }
    keycloak
      .login({idpHint: type})
      .then(() => {
        resolve(true);
      })
      .catch(error => {
        resolve(false);
      });
  });
};

const Login = ({navigation}: Props) => {
  const theme = useTheme();
  const [agreed, setAgreed] = useState(false);

  const [keycloak, initialized] = useKeycloak();

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [alertError, setError] = useState('');

  const loginComplete = useCallback(() => {
    navigation.navigate('HomeTabs');
  }, [navigation]);

  const keycloakButton = useCallback(
    (type: string) => {
      keycloakLogin(keycloak, type).then(result => {
        if (result) {
          loginComplete();
        } else {
          setError(SocialLoginFailed(type));
        }
      });
    },
    [keycloak, loginComplete]
  );

  return (
    <>
      <View
        style={{
          paddingHorizontal: theme.paddingHorizontal,
          paddingVertical: theme.paddingVertical,
          justifyContent: 'center',
          flex: 1,
        }}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Logo width={dip(60)} height={dip(60)} />
        </View>
        <Text
          style={{
            fontSize: dip(24),
            fontWeight: '800',
            textAlign: 'center',
            marginTop: theme.paddingVertical,
          }}>
          {LoginHeading}
        </Text>
        <Text style={{textAlign: 'center', marginTop: theme.spacing}}>
          {LoginSubHeading}
        </Text>
        <View style={{flexDirection: 'row', marginTop: theme.spacing}}>
          <IconButton
            style={{flex: 1}}
            icon={Google}
            text={GoogleButton}
            onPress={() => keycloakButton('google')}
          />
          <View style={{width: theme.spacing}} />
          <IconButton
            style={{flex: 1}}
            icon={Apple}
            text={AppleButton}
            onPress={() => keycloakButton('apple')}
          />
        </View>
        {/* <TextInput
        placeholder={EmailPlaceholder}
        style={{marginTop: theme.spacing}}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder={PasswordPlaceholder}
        style={{marginTop: theme.spacing}}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      /> */}
        {/* <TouchableOpacity
        onPress={() => {
          setAgreed(!agreed);
        }}
        style={{flexDirection: 'row', marginTop: theme.spacing}}>
        <Checkbox checked={agreed} style={{marginRight: theme.spacing}} />
        <Text style={{fontSize: dip(12)}}>{AgreeText}</Text>
      </TouchableOpacity> */}
        {/* <Text
        onPress={() => {
          if (
            keycloak === undefined ||
            keycloak === false ||
            keycloak === true
          ) {
            return;
          }
          navigation.navigate('Password');
        }}
        style={{
          color: theme.colors.primary,
          width: '100%',
          textAlign: 'right',
          marginTop: theme.spacing,
        }}>
        {ForgotPassword}
      </Text> */}
        <PrimaryButton
          text={LoginButton}
          style={{marginTop: theme.spacing}}
          onPress={() => {
            // if (!agreed) {
            //   setError(TermsAgreeError);
            //   return;
            // }
            keycloakButton('email');
          }}
        />
        <BlankButton
          style={{marginTop: theme.spacing}}
          text={SignUpPrompt}
          textStyle={{color: theme.colors.primary}}
          onPress={() => {
            if (
              keycloak === undefined ||
              keycloak === true ||
              keycloak === false
            ) {
              return;
            }
            keycloak
              .register()
              .then(() => {
                navigation.navigate('HomeTabs');
              })
              .catch(error => {
                console.error(error);
                setError(RegistrationError);
              });
            // navigation.navigate('SignUp');
          }}
        />
        <Alert
          title={alertError}
          onPressButton={() => {
            setError('');
          }}
          setVisible={() => {
            setError('');
          }}
          visible={alertError.length > 0}
        />
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: theme.paddingVertical,
          right: theme.paddingHorizontal,
        }}
        onPress={() => {
          navigation.navigate('HomeTabs');
        }}>
        <Text
          style={{
            color: theme.colors.primary,
          }}>
          {SkipButton}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;

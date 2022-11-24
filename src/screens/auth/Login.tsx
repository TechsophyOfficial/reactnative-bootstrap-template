import React from 'react';
import BlankButton from '../../components/BlankButton';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {AuthComposite} from '../../navigation/AuthStack';
import {dip} from '../../util/function';
import {
  AgreeText,
  ForgotPassword,
  LoginButton,
  LoginHeading,
  LoginSubHeading,
  SignUpPrompt,
} from '../../util/strings';

type Props = AuthComposite<'Login'>;

const Login = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: theme.paddingHorizontal,
        paddingVertical: theme.paddingVertical,
      }}>
      <Text style={{fontSize: dip(24), fontWeight: '800', textAlign: 'center'}}>
        {LoginHeading}
      </Text>
      <Text style={{textAlign: 'center'}}>{LoginSubHeading}</Text>
      <Text style={{fontSize: dip(12)}}>{AgreeText}</Text>
      <Text
        onPress={() => {
          navigation.navigate('Password');
        }}
        style={{
          color: theme.colors.primary,
          width: '100%',
          textAlign: 'right',
        }}>
        {ForgotPassword}
      </Text>
      <PrimaryButton
        text={LoginButton}
        onPress={() => {
          navigation.navigate('HomeTabs');
        }}
      />
      <BlankButton
        text={SignUpPrompt}
        textStyle={{color: theme.colors.primary}}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

export default Login;

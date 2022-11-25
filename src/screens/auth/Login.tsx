import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import BlankButton from '../../components/BlankButton';
import Checkbox from '../../components/Checkbox';
import IconButton from '../../components/IconButton';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {AuthComposite} from '../../navigation/AuthStack';
import {dip} from '../../util/function';
import {Facebook, Google, Logo} from '../../util/icons';
import {
  AgreeText,
  EmailPlaceholder,
  FacebookButton,
  ForgotPassword,
  GoogleButton,
  LoginButton,
  LoginHeading,
  LoginSubHeading,
  PasswordPlaceholder,
  SignUpPrompt,
} from '../../util/strings';

type Props = AuthComposite<'Login'>;

const Login = ({navigation}: Props) => {
  const theme = useTheme();
  const [agreed, setAgreed] = useState(false);
  return (
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
          onPress={() => {}}
        />
        <View style={{width: theme.spacing}} />
        <IconButton
          style={{flex: 1}}
          icon={Facebook}
          text={FacebookButton}
          onPress={() => {}}
        />
      </View>
      <TextInput
        placeholder={EmailPlaceholder}
        style={{marginTop: theme.spacing}}
      />
      <TextInput
        placeholder={PasswordPlaceholder}
        style={{marginTop: theme.spacing}}
      />
      <TouchableOpacity
        onPress={() => {
          setAgreed(!agreed);
        }}
        style={{flexDirection: 'row', marginTop: theme.spacing}}>
        <Checkbox checked={agreed} style={{marginRight: theme.spacing}} />
        <Text style={{fontSize: dip(12)}}>{AgreeText}</Text>
      </TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate('Password');
        }}
        style={{
          color: theme.colors.primary,
          width: '100%',
          textAlign: 'right',
          marginTop: theme.spacing,
        }}>
        {ForgotPassword}
      </Text>
      <PrimaryButton
        text={LoginButton}
        style={{marginTop: theme.spacing}}
        onPress={() => {
          navigation.navigate('HomeTabs');
        }}
      />
      <BlankButton
        style={{marginTop: theme.spacing}}
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

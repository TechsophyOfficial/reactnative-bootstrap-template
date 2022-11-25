import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {AuthComposite} from '../../navigation/AuthStack';
import {dip} from '../../util/function';
import {Logo} from '../../util/icons';
import {
  LoginPrompt,
  SignUpButton,
  SignUpHeading,
  SignUpSubHeading,
} from '../../util/strings';

type Props = AuthComposite<'SignUp'>;

const SignUp = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: theme.paddingHorizontal,
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Logo width={dip(60)} height={dip(60)} />
      </View>
      <Text
        style={{fontWeight: 'bold', fontSize: dip(22), textAlign: 'center'}}>
        {SignUpHeading}
      </Text>
      <Text style={{fontWeight: '100', textAlign: 'center'}}>
        {SignUpSubHeading}
      </Text>
      <TextInput placeholder="Full Name" style={{marginTop: theme.spacing}} />
      <TextInput placeholder="Email" style={{marginTop: theme.spacing}} />
      <TextInput placeholder="Password" style={{marginTop: theme.spacing}} />
      <PrimaryButton text={SignUpButton} style={{marginTop: theme.spacing}} />
      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{
          color: theme.colors.primary,
          marginTop: theme.paddingVertical,
          width: '100%',
          textAlign: 'center',
        }}>
        {LoginPrompt}
      </Text>
    </View>
  );
};

export default SignUp;

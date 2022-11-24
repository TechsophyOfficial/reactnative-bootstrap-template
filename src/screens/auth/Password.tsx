import {View, Text} from 'react-native';
import React from 'react';
import BlankButton from '../../components/BlankButton';
import {ForgotPassword, LoginPrompt} from '../../util/strings';
import {AuthComposite} from '../../navigation/AuthStack';

type Props = AuthComposite<'Password'>;

const Password = ({navigation}: Props) => {
  return (
    <View>
      <Text>{ForgotPassword}</Text>
      <BlankButton
        text={LoginPrompt}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default Password;

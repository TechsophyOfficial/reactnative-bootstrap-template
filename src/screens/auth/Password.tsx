import React from 'react';
import BlankButton from '../../components/BlankButton';
import {ForgotPassword, LoginPrompt} from '../../util/strings';
import {AuthComposite} from '../../navigation/AuthStack';
import View from '../../components/View';
import Text from '../../components/Text';

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

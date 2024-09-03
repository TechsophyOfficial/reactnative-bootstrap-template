import React, {useState} from 'react';
import Alert from '../../Components/Alert';
import BlankButton from '../../Components/BlankButton';
import PrimaryButton from '../../Components/PrimaryButton';
import Text from '../../Components/Text';
import TextInput from '../../Components/TextInput';
import View from '../../Components/View';
import useTheme from '../../hooks/useTheme';
import {AuthComposite} from '../../navigation/AuthStack';
import {dip} from '../../util/function';
import {CancelButton, ForgotPassword} from '../../util/strings';

type Props = AuthComposite<'Password'>;

const Password = ({navigation}: Props) => {
  const theme = useTheme();
  const [submittedAlert, setSubmittedAlert] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: theme.paddingHorizontal,
      }}>
      <Text
        style={{
          fontSize: dip(20),
          fontWeight: '500',
          width: '100%',
          textAlign: 'center',
        }}>
        {ForgotPassword}
      </Text>
      <TextInput placeholder="Email" style={{marginTop: theme.spacing}} />
      <PrimaryButton
        text={'Reset Password'}
        style={{marginTop: theme.spacing}}
        onPress={() => {
          setSubmittedAlert(true);
        }}
      />
      <BlankButton
        text={CancelButton}
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{marginTop: theme.spacing}}
      />
      <Alert
        title={'Reset Request Submitted'}
        onPressButton={() => {
          navigation.navigate('Login');
          setSubmittedAlert(false);
        }}
        setVisible={() => {
          navigation.navigate('Login');
          setSubmittedAlert(false);
        }}
        visible={submittedAlert}
      />
    </View>
  );
};

export default Password;

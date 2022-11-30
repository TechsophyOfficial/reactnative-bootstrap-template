import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {Facebook, Logo} from '../../util/icons';
import {
  AppName,
  ContactHeader,
  FacebookButton,
  ShareURL,
} from '../../util/strings';
import InfoButton from './components/InfoButton';

type Props = ProfileComposite<'Contact'>;

const Contact = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <ScreenHeader text={ContactHeader} navigation={navigation} />
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
        <InfoButton
          theme={theme}
          Icon={Facebook}
          heading={FacebookButton}
          text={'/techsophy'}
        />
        <InfoButton
          theme={theme}
          Icon={Logo}
          heading={AppName}
          text={ShareURL}
        />
      </View>
    </View>
  );
};

export default Contact;

import React from 'react';
import {ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Divider from '../../components/Divider';
import ListButton from '../../components/ListButton';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {dip} from '../../util/function';
import {
  Delete,
  Logout,
  Privacy,
  Profile as ProfileIcon,
  Receipts,
  Terms as TermsIcon,
} from '../../util/icons';
import {
  AccountsHeader,
  LegalSettingsHeader,
  ProfileSettingsHead,
  SettingsHeader,
} from '../../util/strings';

type Props = ProfileComposite<'Profile'>;

const Profile = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <ScrollView
      style={{
        paddingHorizontal: theme.paddingHorizontal / 2,
        marginTop: theme.paddingVertical,
      }}>
      <View style={{height: hp(5)}}>
        <Text style={{fontSize: dip(24)}}>{SettingsHeader}</Text>
      </View>
      <Text style={{fontSize: dip(18)}}>{SettingsHeader}</Text>
      <View style={{marginTop: theme.spacing}}>
        <ListButton
          text={ProfileSettingsHead}
          icon={ProfileIcon}
          onPress={() => {
            navigation.navigate('ProfileSettings');
          }}
        />
        <Divider />
        <ListButton
          text={'App Settings'}
          icon={ProfileIcon}
          onPress={() => {
            navigation.navigate('AppSettings');
          }}
        />
        <Divider />
        <ListButton text={'Settings'} icon={ProfileIcon} />
        <Divider />
        <ListButton text={'Settings'} icon={ProfileIcon} />
      </View>
      <Text style={{fontSize: dip(18)}}>{LegalSettingsHeader}</Text>
      <View style={{marginTop: theme.spacing}}>
        <ListButton text={'Terms'} icon={TermsIcon} />
        <Divider />
        <ListButton text={'EULA'} icon={Receipts} />
        <Divider />
        <ListButton text={'Privacy'} icon={Privacy} />
      </View>
      <Text style={{fontSize: dip(18)}}>{AccountsHeader}</Text>
      <View style={{marginTop: theme.spacing}}>
        <ListButton
          text={'Logout'}
          icon={Logout}
          onPress={() => {
            navigation.navigate('OnBoarding');
          }}
        />
        <Divider />
        <ListButton text={'Delete Account'} icon={Delete} />
      </View>
    </ScrollView>
  );
};

export default Profile;

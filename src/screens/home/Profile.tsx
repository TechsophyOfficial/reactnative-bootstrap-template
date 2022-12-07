import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Prompt from '../../components/Prompt';
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
  AboutHeader,
  AccountsHeader,
  ContactHeader,
  DeleteAccountButton,
  EULAHeader,
  FAQHeader,
  LegalSettingsHeader,
  LogoutButton,
  LogoutConfirm,
  PrivacyHeader,
  ProfileSettingsHead,
  SettingsHeader,
  TermsHeader,
} from '../../util/strings';
import {useKeycloak} from '@react-keycloak/native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

type Props = ProfileComposite<'Profile'>;

const Profile = ({navigation}: Props) => {
  const theme = useTheme();
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [keycloak, initialized] = useKeycloak();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}>
      <ScrollView
        style={{
          paddingHorizontal: theme.paddingHorizontal / 2,
        }}>
        <View style={{height: hp(5), marginTop: theme.paddingVertical}}>
          <Text style={{fontSize: dip(24)}}>{SettingsHeader}</Text>
        </View>
        <Text style={{fontSize: dip(18)}}>{SettingsHeader}</Text>
        <View
          style={{
            marginTop: theme.spacing,
          }}>
          <ListButton
            text={ProfileSettingsHead}
            icon={ProfileIcon}
            onPress={() => {
              navigation.navigate('ProfileSettings');
            }}
            position={'top'}
          />
          <Divider />
          <ListButton
            text={'App Settings'}
            icon={ProfileIcon}
            onPress={() => {
              navigation.navigate('AppSettings');
            }}
            position={'bottom'}
          />
        </View>
        <Text style={{fontSize: dip(18)}}>{LegalSettingsHeader}</Text>
        <View style={{marginTop: theme.spacing}}>
          <ListButton
            text={TermsHeader}
            icon={TermsIcon}
            onPress={() => {
              navigation.navigate('Terms', {type: 'Terms'});
            }}
            position={'top'}
          />
          <Divider />
          <ListButton
            text={EULAHeader}
            icon={Receipts}
            onPress={() => {
              navigation.navigate('Terms', {type: 'EULA'});
            }}
          />
          <Divider />
          <ListButton
            text={PrivacyHeader}
            icon={Privacy}
            onPress={() => {
              navigation.navigate('Terms', {type: 'Privacy'});
            }}
          />
          <Divider />
          <ListButton
            text={FAQHeader}
            icon={ProfileIcon}
            onPress={() => {
              navigation.navigate('FAQ');
            }}
          />
          <Divider />
          <ListButton
            text={ContactHeader}
            icon={ProfileIcon}
            onPress={() => {
              navigation.navigate('Contact');
            }}
          />
          <Divider />
          <ListButton
            text={AboutHeader}
            icon={ProfileIcon}
            onPress={() => {
              navigation.navigate('About');
            }}
            position={'bottom'}
          />
        </View>
        <Text style={{fontSize: dip(18)}}>{AccountsHeader}</Text>
        <View style={{marginTop: theme.spacing}}>
          <ListButton
            text={LogoutButton}
            icon={Logout}
            onPress={() => {
              setLogoutDialog(true);
            }}
            position={'top'}
          />
          <Divider />
          <ListButton
            text={DeleteAccountButton}
            icon={Delete}
            onPress={() => {}}
            position={'bottom'}
          />
        </View>
        <View style={{height: hp(10)}} />
      </ScrollView>
      <Prompt
        title={LogoutConfirm}
        onPressNegative={() => {
          setLogoutDialog(false);
        }}
        onPressPositive={async () => {
          if (
            keycloak === undefined ||
            keycloak === false ||
            keycloak === true
          ) {
            return;
          }
          const url = keycloak
            .createLogoutUrl({redirectUri: undefined})
            .split('?')[0];
          InAppBrowser.openAuth(url, 'techsophy://Homepage', {
            modalEnabled: true,
          })
            .then(result => {
              console.log('success', result);
              keycloak.clearToken();
              navigation.navigate('OnBoarding');
            })
            .catch(error => {
              console.error(error);
            });
          setLogoutDialog(false);
        }}
        positiveTitle={LogoutButton}
        visible={logoutDialog}
        setVisible={visible => {
          setLogoutDialog(visible);
        }}
      />
    </View>
  );
};

export default Profile;

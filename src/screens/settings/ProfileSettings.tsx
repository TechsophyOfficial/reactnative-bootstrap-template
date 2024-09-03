import React, {useState} from 'react';
import Alert from '../../Components/Alert';
import PrimaryButton from '../../Components/PrimaryButton';
import Radio from '../../Components/Radio';
import ScreenHeader from '../../Components/ScreenHeader';
import TextInput from '../../Components/TextInput';
import View from '../../Components/View';
import useOnlyKeycloak from '../../hooks/useOnlyKeycloak';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {ProfileSettingsHead, SaveButton} from '../../util/strings';

type Props = ProfileComposite<'ProfileSettings'>;

const ProfileSettings = ({navigation}: Props) => {
  const theme = useTheme();
  const [isFemale, setIsFemale] = useState(true);
  const [savedDialog, setSavedDialog] = useState(false);
  const {keycloak, profile} = useOnlyKeycloak();
  console.log(profile);
  return (
    <View style={{flex: 1, height: theme.buttonHeight}}>
      <ScreenHeader navigation={navigation} text={ProfileSettingsHead} />
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
        <TextInput
          style={{marginTop: theme.spacing}}
          value={profile.given_name}
        />
        <TextInput
          style={{marginTop: theme.spacing}}
          value={profile.family_name}
        />
        <TextInput
          style={{marginTop: theme.spacing}}
          value={profile.email}
          editable={false}
        />
        <View
          style={{
            marginTop: theme.spacing,
            flexDirection: 'row',
          }}>
          <Radio
            checked={isFemale}
            text={'Female'}
            style={{flex: 1}}
            onPress={() => {
              setIsFemale(true);
            }}
          />
          <Radio
            checked={!isFemale}
            text={'Male'}
            style={{flex: 1}}
            onPress={() => {
              setIsFemale(false);
            }}
          />
        </View>
        <PrimaryButton
          text={SaveButton}
          onPress={async () => {
            const p = await keycloak?.loadUserProfile();
            console.log(p);
            // setSavedDialog(true);
          }}
          style={{marginTop: theme.spacing}}
        />
      </View>
      <Alert
        setVisible={setSavedDialog}
        title={'Settings Saved'}
        visible={savedDialog}
        onPressButton={() => {
          setSavedDialog(false);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ProfileSettings;

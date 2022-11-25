import React, {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import Radio from '../../components/Radio';
import ScreenHeader from '../../components/ScreenHeader';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {ProfileSettingsHead, SaveButton} from '../../util/strings';

type Props = ProfileComposite<'ProfileSettings'>;

const ProfileSettings = ({navigation}: Props) => {
  const theme = useTheme();
  const [isFemale, setIsFemale] = useState(true);
  return (
    <View style={{flex: 1, height: theme.buttonHeight}}>
      <ScreenHeader navigation={navigation} text={ProfileSettingsHead} />
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
        <TextInput style={{marginTop: theme.spacing}} />
        <TextInput style={{marginTop: theme.spacing}} />
        <TextInput style={{marginTop: theme.spacing}} />
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
          onPress={() => {
            navigation.goBack();
          }}
          style={{marginTop: theme.spacing}}
        />
      </View>
    </View>
  );
};

export default ProfileSettings;

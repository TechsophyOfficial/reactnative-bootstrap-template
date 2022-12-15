import React, {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import SwitchButton from '../../components/SwitchButton';
import View from '../../components/View';
import useAsyncStorage from '../../hooks/useAsyncStorage';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {ProfileSettingsHead, SaveButton} from '../../util/strings';

type Props = ProfileComposite<'AppSettings'>;

const AppSettings = ({navigation}: Props) => {
  const theme = useTheme();
  const [appLock, setAppLock] = useState(false);

  const [storageItem, updateStorageItem] = useAsyncStorage('theme');

  return (
    <View style={{flex: 1, height: theme.buttonHeight}}>
      <ScreenHeader navigation={navigation} text={ProfileSettingsHead} />
      <View
        style={{
          paddingHorizontal: theme.paddingHorizontal,
        }}>
        <SwitchButton
          style={{marginTop: theme.spacing}}
          label="App Lock"
          checked={appLock}
          setChecked={setAppLock}
        />
        <SwitchButton
          style={{marginTop: theme.spacing}}
          label="Green Theme"
          checked={storageItem !== '2'}
          setChecked={() => {
            if (typeof updateStorageItem === 'function') {
              updateStorageItem(storageItem === '2' ? '1' : '2');
            }
          }}
        />
        <Spinner
          style={{marginTop: theme.spacing}}
          data={['English']}
          label={'Language'}
          onSelect={(_text: string) => {}}
        />
        <Spinner
          style={{marginTop: theme.spacing}}
          data={['India', 'United States', 'France']}
          label={'Country'}
          onSelect={(_text: string) => {}}
        />
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

export default AppSettings;

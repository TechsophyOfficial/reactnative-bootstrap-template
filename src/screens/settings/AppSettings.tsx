import React, {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import SwitchButton from '../../components/SwitchButton';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {ProfileSettingsHead, SaveButton} from '../../util/strings';

type Props = ProfileComposite<'AppSettings'>;

const AppSettings = ({navigation}: Props) => {
  const theme = useTheme();
  const [appLock, setAppLock] = useState(false);
  return (
    <View style={{flex: 1, height: theme.buttonHeight}}>
      <ScreenHeader navigation={navigation} text={ProfileSettingsHead} />
      <View
        style={{
          paddingHorizontal: theme.paddingHorizontal,
        }}>
        <SwitchButton checked={appLock} setChecked={setAppLock} />
        <Spinner
          style={{marginTop: theme.spacing}}
          data={['val1', 'val2', 'val3']}
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

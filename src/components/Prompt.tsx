import React from 'react';
import {GestureResponderEvent, Modal, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {dip} from '../util/function';
import {ThemeOverride} from '../util/theme';
import BlankButton from './BlankButton';
import PrimaryButton from './PrimaryButton';
import Text from './Text';
import View from './View';

const Prompt = ({
  theme,
  title,
  onPressNegative,
  onPressPositive,
  setVisible,
  positiveTitle,
  negativetitle,
  visible,
}: {
  theme: ThemeOverride;
  title: string;
  onPressNegative: (event: GestureResponderEvent) => void;
  onPressPositive: (event: GestureResponderEvent) => void;
  setVisible: (visible: boolean) => void;
  positiveTitle?: string;
  negativetitle?: string;
  visible: boolean;
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType={'fade'}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setVisible(false);
        }}
        style={{
          position: 'absolute',
          width: wp(100),
          height: hp(100),
          backgroundColor: '#00000077',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={{
            width: wp(100) - theme.paddingHorizontal * 2,
            backgroundColor: theme.colors.surface,
            flexDirection: 'column',
            padding: theme.paddingHorizontal,
            justifyContent: 'space-between',
            borderRadius: theme.roundness,
          }}>
          <Text style={[{color: theme.colors.text, textAlign: 'center'}]}>
            {title}
          </Text>
          <View
            style={{
              marginTop: theme.paddingHorizontal,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <PrimaryButton
              style={{flex: 1, height: dip(42)}}
              text={negativetitle ?? 'Cancel'}
              onPress={onPressNegative}
            />
            <BlankButton
              style={{flex: 1}}
              onPress={onPressPositive}
              text={positiveTitle ?? 'Accept'}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default withTheme(Prompt);

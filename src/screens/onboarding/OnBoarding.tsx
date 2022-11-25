import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import BlankButton from '../../components/BlankButton';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {MainStackParam} from '../../navigation/MainStack';
import {dip} from '../../util/function';
import {Logo} from '../../util/icons';
import {
  OnBoardingButton1,
  OnBoardingButton2,
  OnBoardingHead1,
  WelcomeText1,
} from '../../util/strings';

type Props = NativeStackScreenProps<MainStackParam, 'OnBoarding'>;

const OnBoarding = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.paddingHorizontal,
        flexDirection: 'column',
      }}>
      <View style={{flex: 8, alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: theme.paddingVertical,
          }}>
          <Logo width={dip(60)} height={dip(60)} />
        </View>
        <Image
          source={require('../../../assets/img/square1.jpg')}
          style={{
            width: '80%',
            height: '50%',
            marginTop: theme.paddingVertical,
          }}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: dip(28),
            textAlign: 'center',
            marginTop: theme.paddingVertical,
          }}>
          {OnBoardingHead1}
        </Text>
        <Text style={{textAlign: 'center', marginTop: theme.spacing}}>
          {WelcomeText1}
        </Text>
      </View>
      <View style={{flex: 2}}>
        <PrimaryButton
          text={OnBoardingButton1}
          onPress={() => {
            navigation.navigate('AuthStack');
          }}
        />
        <BlankButton
          text={OnBoardingButton2}
          onPress={() => {
            navigation.navigate('HomeTabs');
          }}
        />
      </View>
    </View>
  );
};

export default OnBoarding;

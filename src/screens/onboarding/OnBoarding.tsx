import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import BlankButton from '../../components/BlankButton';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import View from '../../components/View';
import useOnlyKeycloak from '../../hooks/useOnlyKeycloak';
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

  const {keycloak} = useOnlyKeycloak();

  const carouselItem = useCallback(
    ({item}: {item: any; index: number}) => {
      let image = require('../../../assets/img/square1.jpg');
      switch (item) {
        case 1:
          image = require('../../../assets/img/square2.jpg');
          break;
        case 2:
          image = require('../../../assets/img/square3.jpg');
          break;
      }
      return (
        <View style={{alignItems: 'center'}}>
          <Image
            source={image}
            style={{
              width: wp(100) - theme.paddingHorizontal * 2,
              height: wp(100) - theme.paddingHorizontal * 2,
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
      );
    },
    [theme]
  );
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
        <Carousel
          data={[0, 1, 2]}
          renderItem={carouselItem}
          containerCustomStyle={{
            marginTop: theme.paddingVertical,
          }}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          loop={true}
          sliderWidth={wp(100)}
          itemWidth={wp(100)}
        />
      </View>
      <View style={{flex: 2}}>
        <PrimaryButton
          text={OnBoardingButton1}
          onPress={() => {
            navigation.navigate(keycloak?.token ? 'HomeTabs' : 'AuthStack');
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

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoarding from '../screens/onboarding/OnBoarding';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

export type MainStackParam = {
  OnBoarding: undefined;
  AuthStack: undefined;
  HomeTabs: undefined;
};

const MainStackNav = createNativeStackNavigator<MainStackParam>();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoarding">
      <MainStackNav.Screen name="OnBoarding" component={OnBoarding} />
      <MainStackNav.Screen name="AuthStack" component={AuthStack} />
      <MainStackNav.Screen name="HomeTabs" component={HomeTabs} />
    </MainStackNav.Navigator>
  );
};

export default MainStack;

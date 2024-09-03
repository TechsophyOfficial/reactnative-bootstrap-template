import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoarding from '../screens/onboarding/OnBoarding';
import ScannerScreen from '../screens/product/Scanner';

import HomeTabs from './HomeTabs';
import ProductStack from './ProductStack';
import AuthStack from './AuthStack';
import HomeRoute from './HomeRoute';

const MainStackNav = createNativeStackNavigator();

const MainRoute = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoarding">
      {/* <MainStackNav.Screen name="OnBoarding" component={OnBoarding} /> */}
      <MainStackNav.Screen name="AuthStack" component={AuthStack} />
      <MainStackNav.Screen name="HomeRoute" component={HomeRoute} />
      {/* <MainStackNav.Screen name="HomeTabs" component={HomeTabs} />
      <MainStackNav.Screen name="Product" component={ProductStack} />
      <MainStackNav.Screen name="Scanner" component={ScannerScreen} /> */}
    </MainStackNav.Navigator>
  );
};

export default MainRoute;

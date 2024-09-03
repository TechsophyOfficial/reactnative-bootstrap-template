import {CompositeScreenProps} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Views/Authentication/Login';
import Otp from '../Views/Authentication/Otp';
import Password from '../Views/Authentication/Password';
import SignUp from '../Views/Authentication/SignUp';
import Home from '../Views/HomeViews/Home';
import AppOneTabs from './AppOneTabs';
import AppTwoTabs from './AppTwoTabs';
import AppThreeTabs from './AppThreeTabs';
import Product from '../Views/HomeViews/Product';

const HomeRouteStack = createNativeStackNavigator();

const HomeRoute = () => {
  return (
    <HomeRouteStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <HomeRouteStack.Screen name="Home" component={Home} />
      <HomeRouteStack.Screen name="Product" component={Product} />
      <HomeRouteStack.Screen name="AppOne" component={AppOneTabs} />
      <HomeRouteStack.Screen name="AppTwo" component={AppTwoTabs} />
      <HomeRouteStack.Screen name="AppThree" component={AppThreeTabs} />
    </HomeRouteStack.Navigator>
  );
};

export default HomeRoute;

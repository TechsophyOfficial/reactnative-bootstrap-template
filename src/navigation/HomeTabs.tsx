import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../screens/home/Home';
import {MainStackParam} from './MainStack';

export type HomeTabsParam = {
  Home: undefined;
  Files: undefined;
  Receipts: undefined;
  Profile: undefined;
};

export type HomeComposite<T extends keyof HomeTabsParam> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParam, T>,
  NativeStackScreenProps<MainStackParam>
>;
const BottomTabsNav = createBottomTabNavigator<HomeTabsParam>();

const HomeTabs = () => {
  return (
    <BottomTabsNav.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => {
        return <NavBar {...props} />;
      }}>
      <BottomTabsNav.Screen name="Home" component={Home} />
    </BottomTabsNav.Navigator>
  );
};

export default HomeTabs;

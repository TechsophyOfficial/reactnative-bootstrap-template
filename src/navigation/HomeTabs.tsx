import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../screens/home/Home';
import Main from '../screens/home/Main';
import Messaging from '../screens/home/Messaging';
import {MainStackParam} from './MainStack';
import ProfileStack from './ProfileStack';

export type HomeTabsParam = {
  Home: undefined;
  Main: undefined;
  Messaging: undefined;
  ProfileTab: undefined;
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
      <BottomTabsNav.Screen name="Main" component={Main} />
      <BottomTabsNav.Screen name="Messaging" component={Messaging} />
      <BottomTabsNav.Screen name="ProfileTab" component={ProfileStack} />
    </BottomTabsNav.Navigator>
  );
};

export default HomeTabs;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppThreeHome from '../Views/AppThree/AppThreeHome';
import DrawerScreen from './Drawer';

const AppThreeTabs = () => {
  const BottomTabsNav = createBottomTabNavigator();

  return (
    <BottomTabsNav.Navigator
      screenOptions={{headerShown: false}}
      //   tabBar={props => {
      //     return <NavBar {...props} />;
      //   }}
    >
      <BottomTabsNav.Screen name="AppThreeHome" component={DrawerScreen} />
    </BottomTabsNav.Navigator>
  );
};

export default AppThreeTabs;

const styles = StyleSheet.create({});

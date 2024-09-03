import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppTwoHome from '../Views/AppTwo/AppTwoHome';

const AppTwoTabs = () => {
  const BottomTabsNav = createBottomTabNavigator();

  return (
    <BottomTabsNav.Navigator
      screenOptions={{headerShown: false}}
      //   tabBar={props => {
      //     return <NavBar {...props} />;
      //   }}
    >
      <BottomTabsNav.Screen name="AppOneHome" component={AppTwoHome} />
    </BottomTabsNav.Navigator>
  );
};

export default AppTwoTabs;

const styles = StyleSheet.create({});

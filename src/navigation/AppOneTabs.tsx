import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppOneHome from '../Views/AppOne/AppOneHome';

const AppOneTabs = () => {
  const BottomTabsNav = createBottomTabNavigator();

  return (
    <BottomTabsNav.Navigator
      screenOptions={{headerShown: false}}
      //   tabBar={props => {
      //     return <NavBar {...props} />;
      //   }}
    >
      <BottomTabsNav.Screen name="AppOneHome" component={AppOneHome} />
    </BottomTabsNav.Navigator>
  );
};

export default AppOneTabs;

const styles = StyleSheet.create({});

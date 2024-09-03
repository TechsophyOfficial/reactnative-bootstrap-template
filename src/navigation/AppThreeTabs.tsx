import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppThreeHome from '../Views/AppThree/AppThreeHome';

const AppThreeTabs = () => {
  const BottomTabsNav = createBottomTabNavigator();

  return (
    <BottomTabsNav.Navigator
      screenOptions={{headerShown: false}}
      //   tabBar={props => {
      //     return <NavBar {...props} />;
      //   }}
    >
      <BottomTabsNav.Screen name="AppOneHome" component={AppThreeHome} />
    </BottomTabsNav.Navigator>
  );
};

export default AppThreeTabs;

const styles = StyleSheet.create({});

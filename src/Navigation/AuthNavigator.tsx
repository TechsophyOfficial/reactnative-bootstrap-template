import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../Screens/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Authentication/Login';
import PasswordRecovery from '../Screens/Authentication/PasswordRecovery';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});

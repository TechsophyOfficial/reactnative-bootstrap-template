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

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator screenOptions={{headerShown: false}}>
      <AuthStackNav.Screen name="Login" component={Login} />
      <AuthStackNav.Screen name="Password" component={Password} />
      <AuthStackNav.Screen name="Otp" component={Otp} />
      <AuthStackNav.Screen name="SignUp" component={SignUp} />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;

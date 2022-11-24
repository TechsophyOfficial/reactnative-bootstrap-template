import {CompositeScreenProps} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/Login';
import Otp from '../screens/auth/Otp';
import Password from '../screens/auth/Password';
import SignUp from '../screens/auth/SignUp';
import {MainStackParam} from './MainStack';

export type AuthStackParam = {
  Login: undefined;
  Password: undefined;
  Otp: undefined;
  SignUp: undefined;
};

export type AuthComposite<T extends keyof AuthStackParam> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParam, T>,
    NativeStackScreenProps<MainStackParam>
  >;

const AuthStackNav = createNativeStackNavigator<AuthStackParam>();

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

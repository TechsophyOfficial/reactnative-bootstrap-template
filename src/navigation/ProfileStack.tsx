import {CompositeScreenProps} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import ProfileSettings from '../screens/settings/ProfileSettings';
import AppSettings from '../screens/settings/AppSettings';
import {HomeComposite} from './HomeTabs';
import Profile from '../screens/home/Profile';
import Terms from '../screens/settings/Terms';

export type ProfileStackParam = {
  Settings: undefined;
  ProfileSettings: undefined;
  AppSettings: undefined;
  Profile: undefined;
  Terms: {type: 'Terms' | 'EULA' | 'Privacy'};
};

export type ProfileComposite<T extends keyof ProfileStackParam> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParam, T>,
    HomeComposite<'Profile'>
  >;

const AuthStackNav = createNativeStackNavigator<ProfileStackParam>();

const ProfileStack = () => {
  return (
    <AuthStackNav.Navigator screenOptions={{headerShown: false}}>
      <AuthStackNav.Screen name="Profile" component={Profile} />
      <AuthStackNav.Screen name="ProfileSettings" component={ProfileSettings} />
      <AuthStackNav.Screen name="AppSettings" component={AppSettings} />
      <AuthStackNav.Screen name="Terms" component={Terms} />
    </AuthStackNav.Navigator>
  );
};

export default ProfileStack;

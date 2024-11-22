import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import {useAppDispatch, useAppSelector} from '../Redux/Hooks';
import {setLightTheme, setDarkTheme} from '../Redux/reducers/ThemeSlice';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: any) => state.theme.theme);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  }, [colorScheme, dispatch]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppThreeHome from '../Views/AppThree/AppThreeHome';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '100%', // Set full width for drawer
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={AppThreeHome} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { dip } from '../Utils/Fonts';
import Login from '../Screens/Signin/Login';
import { EditPenIcon } from '../Utils/SvgIcons';

const Tab: any = createBottomTabNavigator();
function TabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 60 },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ focused }: any) =>
              focused ? (
                <EditPenIcon size={dip(25)} />
              ) : (
                <EditPenIcon size={dip(25)} />
              ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default TabNavigator;

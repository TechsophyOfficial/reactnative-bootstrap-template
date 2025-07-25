import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../Screens/Signin/Login";
import Second from "../Screens/Signin/Second";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;


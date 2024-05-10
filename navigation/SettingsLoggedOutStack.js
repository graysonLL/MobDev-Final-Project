import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SettingsScreenLoggedOut from "../screens/SettingsScreenLoggedOut";

const Stack = createNativeStackNavigator();

export function SettingsLoggedOutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreenLoggedOut} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

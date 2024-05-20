import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BuyingScreen from "../screens/BuyingScreen";
import LoginScreen from "../screens/LoginScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditShippingScreen from "../screens/EditShippingScreen";
import BuyingHistoryScreen from "../screens/BuyingHistoryScreen";

const Stack = createNativeStackNavigator();

export function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="Edit Shipping Details" component={EditShippingScreen} />
      <Stack.Screen name="Buying" component={BuyingScreen} />
      <Stack.Screen name="Buying History" component={BuyingHistoryScreen} />
    </Stack.Navigator>
  );
}

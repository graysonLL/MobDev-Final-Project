import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import { SettingsStack } from "./SettingsStack";
import { NotificationStack } from "./NotificationStack";
import SearchScreen from "../screens/SearchScreen";
import FavortieScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavortieScreen} />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

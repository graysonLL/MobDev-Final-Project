import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import { SettingsStack } from "./SettingsStack";
import { NotificationStack } from "./NotificationStack";
import SearchScreen from "../screens/SearchScreen";
import FavortieScreen from "../screens/FavoritesScreen";
import { SearchStack } from "./SearchStack";
import { FavoriteStack } from "./FavoriteStack";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Favorite" component={FavoriteStack} />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

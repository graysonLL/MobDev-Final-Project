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
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="SearchStack" component={SearchStack} />
      <Tab.Screen name="FavoriteStack" component={FavoriteStack} />
      <Tab.Screen name="NotificationStack" component={NotificationStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
}

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import { SettingsStack } from "./SettingsStack";
import { NotificationStack } from "./NotificationStack";
import SearchScreen from "../screens/SearchScreen";
import FavortieScreen from "../screens/FavoritesScreen";
import { SearchStack } from "./SearchStack";
import { FavoriteStack } from "./FavoriteStack";
import { Image } from "react-native"; 
import HomeIcon from "../assets/home.png"; // Import your images for each tab
import SearchIcon from "../assets/search.png";
import FavoriteIcon from "../assets/favorite.png";
import NotificationIcon from "../assets/notifications.png";
import SettingsIcon from "../assets/settings.png";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: "", // Hide tab names
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeIcon}
              style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={SearchIcon}
              style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={FavoriteIcon}
              style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={NotificationIcon}
              style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={SettingsIcon}
              style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

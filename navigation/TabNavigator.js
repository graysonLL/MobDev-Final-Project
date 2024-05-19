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
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import images from "../images/imagesExport";
import SettingsScreenLoggedOut from "../screens/SettingsScreenLoggedOut";
import { SettingsLoggedOutStack } from "./SettingsLoggedOutStack";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { userToken } = useContext(AuthContext);
  return (
    <>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: "",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.home}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "purple" : "gray",
              }}
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
              source={images.search}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "purple" : "gray",
              }}
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
              source={images.favorite}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "purple" : "gray",
              }}
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
              source={images.notifications}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "purple" : "gray",
              }}
            />
          ),
        }}
      />
      {userToken ? (
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={images.settings}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "purple" : "gray",
                }}
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="SettingsLoggedOutStack"
          component={SettingsLoggedOutStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={images.settings}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "purple" : "gray",
                }}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>

    </>
  );
}

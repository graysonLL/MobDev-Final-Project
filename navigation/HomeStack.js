import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartScreen from "../screens/CartScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import SearchScreen from "../screens/SearchScreen";
const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: "Details" }}
      />
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: "My Cart" }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen
        name="Search Result"
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

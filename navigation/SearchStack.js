import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import ProductScreen from "../screens/ProductScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ route }) => ({ title: "Details" })}
      />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen
        name="Search Result"
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "My Cart" }}
      />
    </Stack.Navigator>
  );
}

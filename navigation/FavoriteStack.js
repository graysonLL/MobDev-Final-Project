import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: "Details" }}
      />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "My Cart" }}
      />
    </Stack.Navigator>
  );
}

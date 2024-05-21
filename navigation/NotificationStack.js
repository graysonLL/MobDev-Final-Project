import { React, Button } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../screens/NotificationScreen";
import ProductScreen from "../screens/ProductScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createNativeStackNavigator();

export function NotificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification Center" component={NotificationScreen} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: "Details" }}
      />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

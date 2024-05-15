import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

export function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} options={{title:"My Cart"}}/>
    </Stack.Navigator>
  );
}

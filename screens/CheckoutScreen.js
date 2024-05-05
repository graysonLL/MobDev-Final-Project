import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function CheckoutScreen({ route }) {
  const { title, price, body, image } = route.params;

  return (
    <View>
      <Text>{title}</Text>
      <Image source={image} style={styles.itemImage} />
      <Text>{price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  itemImage: {
    width: 350,
    height: 250,
    marginVertical: 10,
  },
});

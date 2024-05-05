import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useState } from "react";
import images from "../images/imagesExport";
import { useNavigation } from "@react-navigation/native";
import ShoesData from "../resources/ShoesData";

export default function HomeScreen({}) {
  const navigation = useNavigation();
  const shoes = ShoesData();

  const { width } = Dimensions.get("window");
  const margin = 10;
  const itemWidth = (width - margin * 2) / 2;
  return (
    <View style={styles.container}>
      <Text>categories</Text>
      <FlatList
        data={shoes}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { width: itemWidth }]}
            onPress={() => navigation.navigate("Product", item)}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.itemBody}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    borderWidth: 1, // Specify the border width
    borderColor: "#000", // Specify the border color
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "gray",
  },
  itemBody: {
    fontSize: 12,
    color: "gray",
  },
  itemImage: {
    width: 150, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginVertical: 10, // Add some space above and below the image
  },
});

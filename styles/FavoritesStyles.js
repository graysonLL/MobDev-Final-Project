import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;

const FavoritesStyles = StyleSheet.create({
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

export default FavoritesStyles;

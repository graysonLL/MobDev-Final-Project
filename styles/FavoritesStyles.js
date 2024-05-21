import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;

const FavoritesStyles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 10,
    width: itemWidth,
    justifyContent: "center",
    height: "auto",
  },
  rowItems: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },

  itemColor: {
    fontSize: 12,
    color: "gray",
  },
  itemImage: {
    width: 150, 
    height: 100, 
    marginVertical: 10,
    
  },
  removeButton: {
    alignItems: "center",
    marginTop: 10,
  },
  trashBin: {
    height: 40,
    width: 40,
  },
  topPortion: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FavoritesStyles;

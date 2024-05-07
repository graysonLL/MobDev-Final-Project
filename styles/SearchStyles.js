import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = width / 2;

const SearchStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    width: "100%",
  },
  listContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    width: itemWidth,
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
    width: 150,
    height: 100,
    marginVertical: 10,
  },
  searchBar: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    width: 300,
  },
  categories: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    borderTopWidth: 1, // Border on top
    borderBottomWidth: 1, // Border on bottom
    borderColor: "lightgrey", // Border color
    padding: 0,
  },
  categoryText: {
    paddingHorizontal: 15,
    padding: 5,
  },
  categoryTextSelected: {
    borderBottomWidth: 1.5,
    borderColor: "black",
  },
});

export default SearchStyles;

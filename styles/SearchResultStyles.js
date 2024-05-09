import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = width / 2;

const SearchResultStyles = StyleSheet.create({
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
    alignItems: "flex-start",
  },
  itemContainer: {
    marginBottom: 5,
    padding: 10,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingBottom: 10,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  backIcon: {
    marginLeft: "5%",
    width: 18,
    height: 18,
  },
  searchBar: {
    width: "65%",
    fontSize: 16,
    paddingVertical: 8,
    borderColor: "#ccc",
    paddingLeft: 25,
  },
  searchTouchableArea: {
    marginLeft: "5%",
    width: 24,
    height: 38,
    justifyContent: "center",
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
  cancelButton: {
    marginLeft: 10,
    color: "black",
    textDecorationStyle: "none",
  },
  searchInputMessage: {
    width: "100%",
    textAlign: "left",
    padding: 10,
    paddingTop: 14,
  },
});

export default SearchResultStyles;

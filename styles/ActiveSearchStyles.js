import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;

const ActiveSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  containerRecent: {
    width: "100%",
  },
  recentSearch: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: "lightgrey",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "lightgrey",
    justifyContent: "space-between",
  },
  clearButton: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 4,
  },
  clearText: {
    fontSize: 10,
  },
  recentSearchContainer: {
    padding: 10,
    paddingLeft: 20,
    borderColor: "lightgrey",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "lightgrey",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  itemContainer: {
    padding: 10,
    borderRadius: 5,
    height: "auto",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  result: {
    marginBottom: 10,
    paddingLeft: "5%",
    paddingBottom: 10,
    paddingTop: 10,
    width: "100%",

    borderColor: "lightgrey",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
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
    color: "black",
  },
  itemImage: {
    width: 120,
    height: 70,
  },
});

export default ActiveSearchStyles;

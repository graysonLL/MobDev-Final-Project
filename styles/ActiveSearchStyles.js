import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;

const ActiveSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    width: "100%",
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

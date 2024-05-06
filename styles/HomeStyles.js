import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;

const HomeStyles = StyleSheet.create({
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
});

export default HomeStyles;

import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CartStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    height: "auto",
    elevation: 5,
  },
  itemImage: {
    
    width: 150,
    height: 100,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
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
  removeButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  trashBin:{
    height: 50,
    width: 50,
  },
  finalDetailsContainer:{
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  wordsContainer: {
    //borderWidth: 1,
  },
  numbersContainer: {
    //borderWidth: 1,
  },
  textFormatting: {
    fontSize: 16,
    marginTop: 10,
  },
  checkOut:{
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  }
});

export default CartStyles;

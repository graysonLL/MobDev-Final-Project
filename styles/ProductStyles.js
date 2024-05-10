import { StyleSheet, Dimensions, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight || 0;
const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;


const ProductScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    marginTop: statusBarHeight,
  },
  picContainer: {
    height: 270,
  },
  price: {
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 15,
    fontSize: 25, 
  },
  sizeText: {
    fonstSize: 20,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 80,
  },
  sizeContainer : {
    flexDirection: 'row',
    height: 50,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  dropDownContainer : {
    borderLeftWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  dropDown : {
    height: 50,
    width: 116,
  },
  itemImage: {
    width: 350,
    height: 250,
    marginVertical: 10,
  },
  buyButton: {
    width: 60,
    height: 30,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 50,
    margin: 20,
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ProductScreenStyles;

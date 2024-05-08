import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;
const statusBarHeight = StatusBar.currentHeight || 0;

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  statusBarHeight,
  },
  imageTop: {
    width: "auto", 
    height: 245,
    resizeMode: "cover",
    flexDirection: "row",
  },
  headerText : {
    margin: 15,
    fontSize: 20,
  },
  recommendedImages: {
    height: 130,
    width: 130,
    flex: 2,
    borderWidth: 0.4,
    borderColor: '#dddddd',
    resizeMode: 'cover',

  },
  shoeTitle: {
    flex: 1,
    marginTop: 10,
  },
  section : {
    marginBottom: 20,
  },
  productContainer: {
    width: 130,
    marginRight: 20,
    borderWidth: 0.4,
    borderColor: '#dddddd',
  },
  brandImages: {
    height: 100,
    width: 100,
    flex: 2,
    resizeMode: 'cover'
  },
  brandContainer: {
    width: 100,
    marginRight: 30,
  },
  adSection:{
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage : {
    height: 300,
    width: 300,
  },
  adText:{
    marginTop: 8,
    fontSize: 15,
  }
  
});

export default HomeStyles;

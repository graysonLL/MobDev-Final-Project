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
    fontSize: 22,
  },
  recommendedImages: {
    height: 150,
    width: 150,
    flex: 2,  
    resizeMode: 'cover',

  },
  shoeTitle: {
    fontSize: 17,
    flex: 1,
    marginTop: 10,
  },
  shoePrice:{
    fontSize: 20,
    marginTop: 10,
  },
  section : {
    marginBottom: 10,
  },
  productContainer: {
    width: 180,
    height: 230,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    marginRight: 20,
    elevation: 5,
    marginBottom: 10, 
  },
  brandImages: {
    height: 120,
    width: 120,
    flex: 2,
    resizeMode: 'cover'
  },
  brandContainer: {
    width: 120,
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

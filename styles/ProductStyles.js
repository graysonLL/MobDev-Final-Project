import { StyleSheet, Dimensions, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight || 0;
const { width } = Dimensions.get("window");
const margin = 10;
const itemWidth = (width - margin * 2) / 2;


const ProductScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, 
  },
  mainContainer: {
    flex: 1,
    paddingTop: 0,
    marginTop: statusBarHeight,
  },
  subContainer: {
    padding: 10,
  },
  picContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
  },
  itemImage: {
    width: 350,
    height: 250,
    marginVertical: 10,
  },
  sizeContainer: {
    marginTop: 10,
    marginBottom: 25,
    flexDirection: 'row',
    height: 50,
    borderWidth: 1, 
    overflow: 'hidden',
    borderRadius: 10,
  },
  sizeText: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  favoritesContainer:{
    flexDirection: 'row',
    borderWidth: 1, 
    borderColor: 'green',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'green'
  },
  infoContainer:{   
    //borderWidth: 1, //commentable
    padding: 10,
    overflow: 'hidden',
  },
  infoText: {
    marginTop: 7,
    color: 'gray',
    textAlign: 'justify',
    fontSize: 15,
  },
  dropDownContainer: {
    //borderWidth: 1,
    width: 115,
    height: 50,
    justifyContent: 'center'
  },
  dropDown : {
    height: 50,
    width: 116,
  },
  priceContainer:{
    //borderWidth: 1, //commentable
    width: 110,
    flexDirection:'column',
    paddingLeft: 20,
  },
  buttonsContainer:{
    backgroundColor: 'white',
    elevation: 5,
    //borderWidth: 1,   //commentable
    flexDirection: 'row',
    padding: 10,
    overflow: 'hidden',
    justifyContent:'space-between'
  },
  buyButton: {
    width: 180,
    height: 50,
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
  },
  sizingChartContainer:{
    height: 300,
    marginBottom: 50,
  },
  sizingChart:{
    height: 325, 
    alignSelf: 'center', 
    resizeMode: 'contain'
  },
  closeButton:{
    marginLeft: 5,
    fontSize: 15,
  },
  
});

export default ProductScreenStyles;

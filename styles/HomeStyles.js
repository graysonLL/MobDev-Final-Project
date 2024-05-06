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
  },
  headerText : {
    margin: 15,
    fontSize: 20,
  }
  
});

export default HomeStyles;

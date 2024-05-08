import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import ShoesAd from "../resources/ShoeAd";
import ShoesProdData from "../resources/ShoesData"
import BrandData from "../resources/BrandData";
import HomeStyles from "../styles/HomeStyles";
import MainContent from "../components/HomePageMainContent"
import AdImage from "../images/Ad1.jpg"
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


export default function HomeScreen({}) {
  const brands = BrandData;
  const shoes = ShoesAd();
  const products = ShoesProdData(); 
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const pan  = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    const interval = setInterval(()=> {
      setCurrentIndex((prevIndex) =>
        prevIndex === shoes.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); 

    return () => clearInterval(interval); 
  }, [])

  useEffect(() => {
    Animated.timing(pan, {
      toValue: -(width * currentIndex),
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, pan, width]);

  return (
    <ScrollView style={HomeStyles.container}>

      <Animated.View style={[HomeStyles.imageTop, { transform: [{ translateX: pan }] }]}>
        {shoes.map((shoe, index) => (  
            <Image key={index} source={shoe.image} style={{ width, height: 245 }}/>  
        ))}
      </Animated.View>
      <MainContent navigation={navigation} products={products} brands={brands}/>

      <View style={HomeStyles.adSection}>
        <Image source={AdImage} style={HomeStyles.adImage}/>
        <Text style={HomeStyles.adText}>Show Now!</Text>

      </View>

    </ScrollView>
  );
}

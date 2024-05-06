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
import { useEffect, useState } from "react";
import ShoesData from "../resources/ShoeAd";
import HomeStyles from "../styles/HomeStyles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({}) {
  const shoes = ShoesData();
  const navigation = useNavigation();

  const { width } = Dimensions.get("window");
  const margin = 10;
  const itemWidth = (width - margin * 2) / 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(()=>{
    Animated.timing(opacity,{
      toValue: 1, 
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]); 


  useEffect(()=>{
    const interval = setInterval(()=> {
      setCurrentIndex((prevIndex) =>
        prevIndex === shoes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, [])

  return (
    <ScrollView style={HomeStyles.container}>
      <Animated.Image 
      source={shoes[currentIndex].image} 
      style={HomeStyles.imageTop} 
      />    
      <Text style={HomeStyles.headerText}>Recommended For You</Text>
      
    </ScrollView>
  );
}

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
import ShoesAd from "../resources/ShoeAd";
import ShoesProdData from "../resources/ShoesData"
import BrandData from "../resources/BrandData";
import HomeStyles from "../styles/HomeStyles";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen({}) {
  const brands = BrandData;
  const shoes = ShoesAd();
  const products = ShoesProdData(); 
  const navigation = useNavigation();

  const { width } = Dimensions.get("window");
  const margin = 10;

  const [currentIndex, setCurrentIndex] = useState(0);
  
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
      <Image 
      source={shoes[currentIndex].image} 
      style={HomeStyles.imageTop} 
      />    
      
      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Recommended For You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{marginLeft: 20, flexDirection: 'row'}}> 

            <View style={HomeStyles.productContainer}>
              <Image source={products[1].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 1</Text>
            </View>
            <View style={HomeStyles.productContainer}>
              <Image source={products[3].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 3</Text>
            </View>
          
            <View style={HomeStyles.productContainer}>
              <Image source={products[5].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 5</Text>
            </View>  

            <View style={HomeStyles.productContainer}>
              <Image source={products[2].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 2</Text>
            </View> 

          </View>
        </ScrollView>
      </View>

      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Top Picks This Month</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{marginLeft: 20, flexDirection: 'row'}}> 

            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
          
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>  

            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View> 

            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View> 

            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View> 

            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View> 

          </View>
        </ScrollView>
      </View>

      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Popular Brands</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{marginLeft: 20, flexDirection: 'row'}}> 

            <View style={HomeStyles.brandContainer}>
              <Image source={brands[0].image} style={HomeStyles.brandImages}/>
              <Text style={HomeStyles.shoeTitle}>Adidas</Text>
            </View>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[1].image} style={HomeStyles.brandImages}/>
              <Text style={HomeStyles.shoeTitle}>Nike</Text>
            </View>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[2].image} style={HomeStyles.brandImages}/>
              <Text style={HomeStyles.shoeTitle}>Converse</Text>
            </View>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[3].image} style={HomeStyles.brandImages}/>
              <Text style={HomeStyles.shoeTitle}>Air Jordan</Text>
            </View>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[4].image} style={HomeStyles.brandImages}/>
              <Text style={HomeStyles.shoeTitle}>Off-White</Text>
            </View>
          
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

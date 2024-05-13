import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity} from "react-native";
import HomeStyles from "../styles/HomeStyles"

const MainContent = ({navigation, products, brands}) => {
  
    return (
        <View>
        <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Recommended For You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{marginLeft: 20, flexDirection: 'row'}}> 

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[1])}>
              <View style={HomeStyles.productContainer}>
                <Image source={products[1].image} style={HomeStyles.recommendedImages}/>
                <Text style={HomeStyles.shoeTitle}>Jordan 2</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[3])}>
              <View style={HomeStyles.productContainer}>
                <Image source={products[3].image} style={HomeStyles.recommendedImages}/>
                <Text style={HomeStyles.shoeTitle}>Jordan 3</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[5])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[5].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 5</Text>
            </View>
            </TouchableOpacity>
             
            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[2])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[2].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 2</Text>
            </View> 
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Top Picks This Month</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{marginLeft: 20, flexDirection: 'row'}}> 

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Product", products[4])}>
            <View style={HomeStyles.productContainer}>
              <Image source={products[4].image} style={HomeStyles.recommendedImages}/>
              <Text style={HomeStyles.shoeTitle}>Jordan 4</Text>
            </View>
            </TouchableOpacity>

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
      </View>

    );

};

export default MainContent;
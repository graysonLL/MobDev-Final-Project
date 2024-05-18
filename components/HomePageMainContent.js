import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import ShoesData from "../resources/ShoesData";


const MainContent = ({ navigation, products, brands }) => {
  const shoes = ShoesData();
  return (
    <View>
      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Recommended For You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginLeft: 20, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[1] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[1].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[1].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[1].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[3] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[3].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[3].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[3].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[5] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[5].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[5].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[5].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[2] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[2].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[2].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[2].price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Top Picks This Month</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginLeft: 20, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[6] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[6].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[6].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[6].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[7] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[7].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[7].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[7].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[8] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[8].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[8].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[8].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[9] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[9].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[9].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[9].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[4] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[4].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[4].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[4].price}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", { item: products[0] })
              }
            >
              <View style={HomeStyles.productContainer}>
                <Image
                  source={products[0].image}
                  style={HomeStyles.recommendedImages}
                />
                <Text style={HomeStyles.shoeTitle}>{products[0].title}</Text>
                <Text style={HomeStyles.shoePrice}>$ {products[0].price}</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

      <View style={HomeStyles.section}>
        <Text style={HomeStyles.headerText}>Popular Brands</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginLeft: 20, flexDirection: "row" }}>

            <TouchableOpacity style={HomeStyles.brandContainer}
             onPress={()=>navigation.navigate("Search Result", {data:shoes, input:'adidas'})}>
            <View>
              <Image source={brands[0].image} style={HomeStyles.brandImages}/>
              <Text style={{fontSize: 15}}>Adidas</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.brandContainer}
             onPress={()=>navigation.navigate("Search Result", {data:shoes, input:'nike'})}>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[1].image} style={HomeStyles.brandImages} />
              <Text style={{fontSize: 15}}>Nike</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.brandContainer} 
             onPress={()=>navigation.navigate("Search Result", {data:shoes, input:'converse'})}>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[2].image} style={HomeStyles.brandImages} />
              <Text style={{fontSize: 15}}>Converse</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.brandContainer}
             onPress={()=>navigation.navigate("Search Result", {data:shoes, input:'jordan'})}>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[3].image} style={HomeStyles.brandImages} />
              <Text style={{fontSize: 15}}>Air Jordan</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.brandContainer}
             onPress={()=>navigation.navigate("Search Result", {data:shoes, input:'off-white'})}>
            <View style={HomeStyles.brandContainer}>
              <Image source={brands[4].image} style={HomeStyles.brandImages} />
              <Text style={{fontSize: 15}}>Off-White</Text>
            </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainContent;

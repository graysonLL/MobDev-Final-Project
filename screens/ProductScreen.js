import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/ProductStyles";
import HomeStyles from "../styles/HomeStyles";
import ShoesData from "../resources/ShoesData";
import sizingChart from "../images/shoesSizes.png";
import shoppingCart from "../images/shoppingCart.png"
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import FavoriteList from "../resources/FavoriteList";
import ShoppingCart from "../components/shoppingCart"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductScreen({ route }) {
  const { item } = route.params;
  const { title, price, body, image, category, color } = item;
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState();
  const sizes = [
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "12",
    "13",
  ];
  const [isModalVisibile, setIsModalVisible] = useState(false);
  const products = ShoesData();

  {
    /* in charge of hiding the bottom navbar when page is being navigated to */
  }
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  const { saveFavoriteShoes, loadFavoriteShoes } = FavoriteList();

  const addToFavorites = async () => {
    try {
      const newShoe = item;
      const storedFavoriteShoes = await loadFavoriteShoes(); // Load favorite shoes data
      const updatedFavoriteShoes = [...storedFavoriteShoes, newShoe];
      saveFavoriteShoes(updatedFavoriteShoes);
    } catch (error) {
      console.error("Error adding shoe to favorites:", error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.picContainer}>
          <Image source={image} style={styles.itemImage} />
        </View>

        <View style={styles.subContainer}>
          <View
            style={{
              ...styles.infoContainer,
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 25, flex: 1 }}>{title}</Text>
            <Text style={{ fontSize: 25, marginLeft: 'auto' }}>{price}</Text>
          </View>

        <TouchableOpacity onPress={addToFavorites}>
          <View style={styles.favoritesContainer}>
          <Text style={{color: 'white', justifyContent: 'center', fontSize: 18}}>Add to Favorites</Text>
          </View>
        </TouchableOpacity>

          <View
            style={styles.infoContainer}
          >
            <Text style={{ fontSize: 18 }}>Product Details</Text>
            <Text style={styles.infoText}>Colourway: {color}</Text>
            <Text style={styles.infoText}>Price: {price}</Text>
            <Text style={styles.infoText}>Release Date: </Text>
            <Text style={styles.infoText}>{body}</Text>
          </View>

          {/* Size section */}
          <View style={styles.sizeContainer}>
            <View style={styles.sizeText}>
              <Text style={{ fontSize: 18 }}> Select Your Size!</Text>
            </View>

            <View style={styles.dropDownContainer}>
              <Picker
                mode="dropdown"
                selectedValue={selectedSize}
                style={styles.dropDown}
                onValueChange={(itemValue) => setSelectedSize(itemValue)}
              >
                {sizes.map((size) => (
                  <Picker.Item
                    key={size}
                    label={size}
                    value={size}
                    style={{ fontSize: 18 }}
                  />
                ))}
              </Picker>
            </View>
          </View>
          {/* Size section */}

          {/* Chart section */}
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <View style={styles.sizingChartContainer}>
              <Image source={sizingChart} style={styles.sizingChart} />
            </View>
          </TouchableOpacity>
          {/* Chart section */}

          {/* Suggested section */}
          <View
            style={{
              ...styles.infoContainer,
              borderTopWidth: 1,
              borderColor: "gray",
              marginBottom: -40,
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Suggested Products
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: "row" }}>
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
                <Text style={HomeStyles.shoePrice}>{products[1].price}</Text>
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
                <Text style={HomeStyles.shoePrice}>{products[3].price}</Text>
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
                <Text style={HomeStyles.shoePrice}>{products[5].price}</Text>
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
                <Text style={HomeStyles.shoePrice}>{products[2].price}</Text>
              </View>
            </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/* Suggested section */}
        </View>
      </ScrollView>

      {/* Shopping Cart Icon */}            
      <ShoppingCart />
      {/* Shopping Cart Icon */}  

      {/* Buttons section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      {/* Buttons section */}

      
      
      {/*handles the sizing chart being clicked and opening */}
      <Modal visible={isModalVisibile} animationType="slide" transparent={true}>
        <View style={styles.sizingChartContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
          <Image source={sizingChart} style={styles.sizingChart} />
        </View>
      </Modal>
    </View>
  );
}

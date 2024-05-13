import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/ProductStyles";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import FavoriteList from "../resources/FavoriteList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductScreen({ route }) {
  const { item } = route.params;
  const { title, price, body, image, category } = item;
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
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={addToFavorites}>
        <Text>add to favorite</Text>
      </TouchableOpacity>
      <View style={styles.picContainer}>
        <Image source={image} style={styles.itemImage} />
      </View>

      {/* Size seciton */}
      <View style={styles.sizeContainer}>
        <View style={styles.sizeText}>
          <Text style={{ fontSize: 18 }}>Select Your Size!</Text>
        </View>

        <View style={styles.dropDownContainer}>
          <Picker
            mode="dropdown"
            numberOfLines={5}
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
      {/* Size seciton */}
    </View>
  );
}

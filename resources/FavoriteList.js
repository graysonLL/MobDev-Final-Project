import { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

const FavoriteList = () => {
  const [favoriteShoes, setFavoriteShoes] = useState([]);
  const { userToken } = useContext(AuthContext);

  const loadFavoriteShoes = async () => {
    try {
      if (userToken) {
        const storedFavoriteShoes = await AsyncStorage.getItem(
          `favoriteShoes_${userToken}`
        );
        if (storedFavoriteShoes) {
          const favoriteShoesData = JSON.parse(storedFavoriteShoes);
          setFavoriteShoes(favoriteShoesData); // Update state with loaded data
          return favoriteShoesData; // Return the loaded data
        }
      }
      return []; // Return an empty array if no data is found
    } catch (error) {
      console.error("Error loading favorite shoes data:", error);
      throw error; // Throw the error to be caught by the caller
    }
  };

  const saveFavoriteShoes = async (data) => {
    try {
      if (userToken) {
        // Check if the key of the new shoe is unique
        const isKeyUnique = data.every(
          (shoe, index) =>
            data.findIndex((otherShoe) => otherShoe.key === shoe.key) === index
        );

        if (isKeyUnique) {
          // If the key is unique, save the updated list
          await AsyncStorage.setItem(
            `favoriteShoes_${userToken}`,
            JSON.stringify(data)
          );
          setFavoriteShoes(data);
        } else {
          console.error(
            "Error saving favorite shoes data: Duplicate keys found"
          );
        }
      }
    } catch (error) {
      console.error("Error saving favorite shoes data:", error);
    }
  };
  return {
    favoriteShoes,
    saveFavoriteShoes,
    loadFavoriteShoes,
  };
};

export default FavoriteList;

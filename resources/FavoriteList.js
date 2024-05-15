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
          setFavoriteShoes(favoriteShoesData);
          return favoriteShoesData;
        }
      }
      return [];
    } catch (error) {
      console.error("Error loading favorite shoes data:", error);
      throw error;
    }
  };

  const saveFavoriteShoes = async (data, newShoe) => {
    try {
      if (userToken) {
        let updatedShoes = [...data];
        const existingIndex = updatedShoes.findIndex(
          (shoe) => shoe.key === newShoe.key
        );

        if (existingIndex !== -1) {
          updatedShoes = updatedShoes.filter(
            (shoe, index) => index !== existingIndex
          );
        } else {
          updatedShoes.push(newShoe);
        }

        await AsyncStorage.setItem(
          `favoriteShoes_${userToken}`,
          JSON.stringify(updatedShoes)
        );

        setFavoriteShoes(updatedShoes);
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

import { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const { userToken } = useContext(AuthContext);

  const loadCartItems = async () => {
    try {
      if (userToken) {
        const storedCartItems = await AsyncStorage.getItem(
          `cartItems_${userToken}`
        );
        if (storedCartItems) {
          const cartItemsData = JSON.parse(storedCartItems);
          setCartItems(cartItemsData);
          return cartItemsData;
        }
      }
      return [];
    } catch (error) {
      console.error("Error loading cart items data:", error);
      throw error;
    }
  };

  const saveCartItems = async (data, newItem) => {
    try {
      if (userToken) {
        let updatedItems = [...data];
        const existingIndex = updatedItems.findIndex(
          (item) => item.key === newItem.key
        );

        if (existingIndex !== -1) {
          updatedItems = updatedItems.filter(
            (item, index) => index !== existingIndex
          );
        } else {
          updatedItems.push(newItem);
        }

        await AsyncStorage.setItem(
          `cartItems_${userToken}`,
          JSON.stringify(updatedItems)
        );

        setCartItems(updatedItems);
      }
    } catch (error) {
      console.error("Error saving cart items data:", error);
    }
  };

  const removeCartItem = async (itemKey) => {
    try {
      if (userToken) {
        const updatedItems = cartItems.filter(item => item.key !== itemKey);
        await AsyncStorage.setItem(
          `cartItems_${userToken}`,
          JSON.stringify(updatedItems)
        );
        setCartItems(updatedItems);
      }
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  return {
    cartItems,
    saveCartItems,
    loadCartItems,
    removeCartItem,
  };
};

export default CartList;



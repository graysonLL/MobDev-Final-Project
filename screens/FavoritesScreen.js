import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FavoriteList from "../resources/FavoriteList";
import FavoritesStyles from "../styles/FavoritesStyles";
import ShoppingCart from "../components/shoppingCart";
import { useEffect } from "react";
import SearchStyles from "../styles/SearchStyles";
import { ScrollView } from "react-native-gesture-handler";
import bin from "../images/trashIcon.png";

export default function FavoritesScreen({}) {
  const navigation = useNavigation();
  const { favoriteShoes, loadFavoriteShoes, saveFavoriteShoes } =
    FavoriteList();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadFavoriteShoes();
    });
    return unsubscribe;
  }, [navigation, loadFavoriteShoes]);

  const handleRemove = async (item) => {
    try {
      const newShoe = item;
      const storedFavoriteShoes = await loadFavoriteShoes();
      saveFavoriteShoes(storedFavoriteShoes, newShoe);
    } catch (error) {
      console.error("Error adding shoe to favorites:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={favoriteShoes}
        contentContainerStyle={{ paddingBottom: 70 }}
        numColumns={2}
        style={FavoritesStyles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={FavoritesStyles.itemContainer}
            onPress={() => navigation.navigate("Product", { item })}
          >
            <View style={FavoritesStyles.topPortion}>
              <Image source={item.image} style={FavoritesStyles.itemImage} />
              <TouchableOpacity
                style={FavoritesStyles.removeButton}
                onPress={() => handleRemove(item)}
              >
                <Image source={bin} style={FavoritesStyles.trashBin} />
              </TouchableOpacity>
            </View>
            <Text style={FavoritesStyles.itemTitle}>{item.title}</Text>

            <Text style={FavoritesStyles.itemPrice}>$ {item.price}</Text>
            <Text style={FavoritesStyles.itemBody}>{item.color}</Text>
          </TouchableOpacity>
        )}
      />

      <ShoppingCart />
    </View>
  );
}

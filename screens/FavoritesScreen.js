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
import { useEffect } from "react";

export default function FavoritesScreen({}) {
  const navigation = useNavigation();
  const { favoriteShoes, loadFavoriteShoes } = FavoriteList();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadFavoriteShoes();
    });
    return unsubscribe;
  }, [navigation, loadFavoriteShoes]);
  return (
    <View>
      <FlatList
        data={favoriteShoes}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[FavoritesStyles.itemContainer]}
            onPress={() => navigation.navigate("Product", { item })}
          >
            <Text style={FavoritesStyles.itemTitle}>{item.title}</Text>
            <Image source={item.image} style={FavoritesStyles.itemImage} />
            <Text style={FavoritesStyles.itemPrice}>{item.price}</Text>
            <Text style={FavoritesStyles.itemBody}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

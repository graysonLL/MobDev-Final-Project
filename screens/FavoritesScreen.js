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

export default function FavoritesScreen({ route }) {
  const navigation = useNavigation();
  const shoes = FavoriteList();
  const { width } = Dimensions.get("window");
  const margin = 10;

  return (
    <View>
      <FlatList
        data={shoes}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[FavoritesStyles.itemContainer]}
            onPress={() => navigation.navigate("Product", item)}
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

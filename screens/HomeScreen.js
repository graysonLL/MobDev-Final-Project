import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useState } from "react";
import ShoesData from "../resources/ShoesData";
import HomeStyles from "../styles/HomeStyles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({}) {
  const shoes = ShoesData();
  const navigation = useNavigation();

  const [input, setInput] = useState("");

  const { width } = Dimensions.get("window");
  const margin = 10;
  const itemWidth = (width - margin * 2) / 2;

  return (
    <View style={HomeStyles.container}>
      <FlatList
        data={shoes}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[HomeStyles.itemContainer, { width: itemWidth }]}
            onPress={() => navigation.navigate("Product", item)}
          >
            <Text style={HomeStyles.itemTitle}>{item.title}</Text>
            <Image source={item.image} style={HomeStyles.itemImage} />
            <Text style={HomeStyles.itemPrice}>{item.price}</Text>
            <Text style={HomeStyles.itemBody}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

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
import NotificationList from "../resources/NotificationList.";

export default function NotificationScreen({ route }) {
  const navigation = useNavigation();
  const shoes = NotificationList();
  const { width } = Dimensions.get("window");
  const margin = 10;

  return (
    <View>
      <FlatList
        data={shoes}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer]}
            onPress={() => navigation.navigate("Product", item)}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.itemBody}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    borderWidth: 1, // Specify the border width
    borderColor: "#000", // Specify the border color
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "gray",
  },
  itemBody: {
    fontSize: 12,
    color: "gray",
  },
  itemImage: {
    width: 150, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginVertical: 10, // Add some space above and below the image
  },
});

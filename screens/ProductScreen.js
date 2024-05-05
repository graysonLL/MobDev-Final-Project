import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function ProductScreen({
  route: {
    params: { title, price, body, image },
  },
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() =>
          navigation.navigate("Checkout", { title, price, body, image })
        }
      >
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
      <Text style={styles.price}>{price}</Text>
      <View style={styles.subContainer}>
        <Image source={image} style={styles.itemImage} />
        <Text>{body}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    borderWidth: 4,
  },
  subContainer: {
    flex: 1,
    paddingBottom: 200,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  price: {
    fontSize: 20,
    paddingBottom: 10,
    position: "absolute",
    right: 0,
    padding: 20,
  },
  itemImage: {
    width: 350,
    height: 250,
    marginVertical: 10,
  },
  buyButton: {
    width: 60,
    height: 30, // Adjust the height as needed
    backgroundColor: "#4CAF50", // Green background
    borderRadius: 5, // Rounded corners
    margin: 10, // Add some space around the button
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
    position: "absolute",
    right: 50,
    margin: 20,
  },
  buyButtonText: {
    color: "#FFFFFF", // White text
    fontSize: 16, // Adjust the font size as needed
  },
});

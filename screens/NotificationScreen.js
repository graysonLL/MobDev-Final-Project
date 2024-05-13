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
import ShoesData from "../resources/ShoesData";
import images from "../images/imagesExport";

export default function NotificationScreen({ route }) {
  const navigation = useNavigation();
  const shoes = ShoesData();
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
            onPress={() => navigation.navigate("Product", { item })}
          >
            <Image source={images.dot} style={styles.dot} />
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.notifBody}>
              <Text style={styles.itemTitle}>{item.notif}</Text>
              <Text style={styles.itemBody}>{item.notifBody}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 0,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 1,
    // alignItems: "center",
    // justifyContent: "center",
    height: "auto",
    borderWidth: 0.5,
    borderColor: "#000",
    flexDirection: "row",
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "gray",
  },
  itemBody: {
    fontSize: 11,
    color: "gray",
  },
  itemImage: {
    width: 75,
    height: 50,
    marginVertical: 3,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gray",
    padding: 0,
  },
  notifBody: {
    margin: 5,
  },
  dot: {
    width: 0.5,
    height: 5.5,
    alignSelf: "center",
    padding: 5,
    marginRight: 10,
  },
});

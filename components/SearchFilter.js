import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchFilter = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const margin = 10;
  const itemWidth = (width - margin * 2) / 2;

  return (
    <View style={[styles.outerContainer]}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <TouchableOpacity
                style={[styles.itemContainer]}
                onPress={() => navigation.navigate("Product", item)}
              >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemBody}>{item.body}</Text>
              </TouchableOpacity>
            );
          }

          if (item.title.toLowerCase().includes(input.toLowerCase())) {
            return (
              <TouchableOpacity
                style={[styles.itemContainer]}
                onPress={() => navigation.navigate("Product", item)}
              >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemBody}>{item.body}</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "100%",
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

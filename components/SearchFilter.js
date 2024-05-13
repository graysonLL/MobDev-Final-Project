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
import SearchStyles from "../styles/SearchStyles";

const SearchFilter = ({ data, input, setInput, selectedCategory }) => {
  const navigation = useNavigation();
  const filteredShoes = data.filter((item) => {
    const categoryMatch =
      !selectedCategory || selectedCategory === item.category;
    const inputMatch =
      !input || item.title.toLowerCase().includes(input.toLowerCase());
    return categoryMatch && inputMatch;
  });

  return (
    <FlatList
      data={filteredShoes}
      contentContainerStyle={{ paddingBottom: 70 }}
      numColumns={2}
      style={SearchStyles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={SearchStyles.itemContainer}
          onPress={() => navigation.navigate("Product", { item })}
        >
          <Image source={item.image} style={SearchStyles.itemImage} />
          <Text style={SearchStyles.itemTitle}>{item.title}</Text>
          <Text style={SearchStyles.itemPrice}>{item.price}</Text>
          <Text style={SearchStyles.itemBody}>{item.body}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SearchFilter;

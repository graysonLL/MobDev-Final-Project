import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import SearchStyles from "../styles/SearchStyles";
import { useNavigation } from "@react-navigation/native";

export default function SearchResultScreen({ route }) {
  const { data, input } = route.params;
  const navigation = useNavigation();

  const filteredShoes = data.filter((item) => {
    const inputMatch =
      !input || item.title.toLowerCase().includes(input.toLowerCase());
    return inputMatch;
  });

  return (
    <View style={SearchStyles.container}>
      <Text style={SearchStyles.result}>Search results for "{input}"</Text>
      <FlatList
        data={filteredShoes}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[SearchStyles.itemContainer]}
            onPress={() => navigation.navigate("Product", item)}
          >
            <View>
              <Image source={item.image} style={SearchStyles.itemImage} />
            </View>
            <View>
              <Text style={SearchStyles.itemTitle}>{item.title}</Text>
              <Text style={SearchStyles.itemBody}>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

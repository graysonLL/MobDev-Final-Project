import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import ActiveSearchStyles from "../styles/ActiveSearchStyles";
import SearchData from "../resources/SearchData";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const SearchFilter = ({ data, input, setInput, selectedCategory }) => {
  const navigation = useNavigation();

  const filteredShoes = data.filter((item) => {
    const categoryMatch =
      !selectedCategory || selectedCategory === item.category;
    const inputMatch =
      !input || item.title.toLowerCase().includes(input.toLowerCase());
    return inputMatch;
  });
};
export default function ActiveSearch({ data, input }) {
  const navigation = useNavigation();

  const filteredShoes = data.filter((item) => {
    const inputMatch =
      !input || item.title.toLowerCase().includes(input.toLowerCase());
    return inputMatch;
  });
  return (
    <View style={ActiveSearchStyles.container}>
      <Text style={ActiveSearchStyles.result}>Top Results</Text>
      <FlatList
        data={filteredShoes}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[ActiveSearchStyles.itemContainer]}
            onPress={() => navigation.navigate("Product", item)}
          >
            <View>
              <Image source={item.image} style={ActiveSearchStyles.itemImage} />
            </View>
            <View>
              <Text style={ActiveSearchStyles.itemTitle}>{item.title}</Text>
              <Text style={ActiveSearchStyles.itemBody}>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

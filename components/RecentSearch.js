import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ActiveSearchStyles from "../styles/ActiveSearchStyles";
import SearchData from "../resources/SearchData";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function RecentSearch({
  recentSearches,
  data,
  input,
  clearRecentSearches,
}) {
  const navigation = useNavigation();

  return (
    <View style={ActiveSearchStyles.containerRecent}>
      <View style={ActiveSearchStyles.recentSearch}>
        <Text style={ActiveSearchStyles.resultText}>Recent Searches</Text>
        <TouchableOpacity
          style={ActiveSearchStyles.clearButton}
          activeOpacity={1}
          onPress={clearRecentSearches}
        >
          <Text style={ActiveSearchStyles.clearText}>clear searches</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentSearches}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[ActiveSearchStyles.recentSearchContainer]}
            onPress={() =>
              navigation.navigate("Search Result", { data: data, input: item })
            }
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

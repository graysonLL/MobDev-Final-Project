import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  textInputRef,
} from "react-native";
import React from "react";
import SearchResultStyles from "../styles/SearchResultStyles";
import { useNavigation } from "@react-navigation/native";
import backImage from "../images/back.png";
import { useState, useEffect } from "react";
import ActiveSearchStyles from "../styles/ActiveSearchStyles";
import SearchStyles from "../styles/SearchStyles";
import ActiveSearch from "../components/ActiveSearch";
import { useRef } from "react";

export default function SearchResultScreen({ route }) {
  const { data, input } = route.params;
  const navigation = useNavigation();
  const [isSearching, setIsSearching] = useState(false);
  const textInputRef = useRef(null);

  const [inputNew, setInputNew] = useState(input);

  const filteredShoes = data.filter((item) => {
    const inputMatch =
      !inputNew || item.title.toLowerCase().includes(inputNew.toLowerCase());
    return inputMatch;
  });

  const handleBack = () => {
    navigation.navigate("Search");
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const finishSearch = () => {
    setIsSearching(false);
  };

  const handleSearchSubmit = () => {
    setIsSearching(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isSearching && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isSearching]);

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside} accessible={false}>
      <KeyboardAvoidingView
        style={SearchStyles.outerContainer}
        behavior="padding"
      >
        {!isSearching ? (
          <>
            <View style={SearchResultStyles.searchContainer}>
              <TouchableOpacity
                style={SearchResultStyles.searchTouchableArea}
                onPress={handleBack}
              >
                <Image source={backImage} style={SearchResultStyles.backIcon} />
              </TouchableOpacity>
              <TextInput
                value={inputNew}
                onChangeText={(text) => setInputNew(text)}
                style={SearchStyles.searchBar}
                placeholder={inputNew}
                onFocus={handleSearch}
                returnKeyType="search"
              />
            </View>
            <Text style={SearchResultStyles.searchInputMessage}>
              Search results for{" "}
              <Text style={{ fontWeight: "bold" }}>"{inputNew}"</Text>
            </Text>
            <FlatList
              style={SearchStyles.listContainer}
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
          </>
        ) : (
          <>
            <View style={SearchStyles.searchContainer}>
              <TouchableOpacity
                style={SearchResultStyles.searchTouchableArea}
                onPress={handleBack}
              >
                <Image source={backImage} style={SearchResultStyles.backIcon} />
              </TouchableOpacity>
              <TextInput
                ref={textInputRef}
                value={inputNew}
                onChangeText={(text) => setInputNew(text)}
                style={SearchStyles.searchBar}
                placeholder={inputNew}
                onFocus={handleSearch}
                returnKeyType="search"
                onSubmitEditing={finishSearch}
              />
            </View>
            <ActiveSearch data={data} input={inputNew} />
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

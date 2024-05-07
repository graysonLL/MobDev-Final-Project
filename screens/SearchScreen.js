import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import { useState } from "react";
import SearchStyles from "../styles/SearchStyles";
import SearchData from "../resources/SearchData";
import SearchFilter from "../components/SearchFilter";
import { KeyboardAvoidingView } from "react-native";
import ActiveSearch from "../components/ActiveSearch";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen({ route }) {
  const shoes = SearchData();
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigation();

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleSearchSubmit = () => {
    setIsSearching(false);
    setInput("");
    Keyboard.dismiss();
  };

  const navigateSearch = () => {
    navigation.navigate("Search Result", { data: shoes, input: input });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside} accessible={false}>
      <KeyboardAvoidingView
        style={SearchStyles.outerContainer}
        behavior="padding"
      >
        {isSearching ? (
          <>
            <View style={SearchStyles.searchContainer}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                style={SearchStyles.searchBar}
                placeholder="Search"
                onFocus={handleSearch}
                onSubmitEditing={navigateSearch}
              />
              <TouchableOpacity>
                <Text
                  style={SearchStyles.cancelButton}
                  onPress={handleSearchSubmit}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <ActiveSearch data={shoes} input={input} />
          </>
        ) : (
          <>
            <View style={SearchStyles.searchContainer}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                style={SearchStyles.searchBar}
                placeholder="Search"
                onFocus={handleSearch}
                onSubmitEditing={navigateSearch}
              />
            </View>
            <View style={SearchStyles.categories}>
              <Text
                onPress={() => filterByCategory(null)}
                style={[
                  SearchStyles.categoryText,
                  selectedCategory === null &&
                    SearchStyles.categoryTextSelected,
                ]}
              >
                All
              </Text>
              <Text
                onPress={() => filterByCategory("nike")}
                style={[
                  SearchStyles.categoryText,
                  selectedCategory === "nike" &&
                    SearchStyles.categoryTextSelected,
                ]}
              >
                Nike
              </Text>
              <Text
                onPress={() => filterByCategory("adidas")}
                style={[
                  SearchStyles.categoryText,
                  selectedCategory === "adidas" &&
                    SearchStyles.categoryTextSelected,
                ]}
              >
                Adidas
              </Text>
              <Text
                onPress={() => filterByCategory("jordan")}
                style={[
                  SearchStyles.categoryText,
                  selectedCategory === "jordan" &&
                    SearchStyles.categoryTextSelected,
                ]}
              >
                Jordan
              </Text>
            </View>
            <SearchFilter
              data={shoes}
              input={input}
              setInput={setInput}
              selectedCategory={selectedCategory}
            />
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

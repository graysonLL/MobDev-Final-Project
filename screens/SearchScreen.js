import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import SearchStyles from "../styles/SearchStyles";
import SearchData from "../resources/ShoesData";
import SearchFilter from "../components/SearchFilter";
import { KeyboardAvoidingView } from "react-native";
import ActiveSearch from "../components/ActiveSearch";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import searchImage from "../images/search.png";
import { useRef } from "react";
import RecentSearch from "../components/RecentSearch";

export default function SearchScreen({ route }) {
  const shoes = SearchData();
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigation();
  const [recentSearches, setRecentSearches] = useState([]);

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
    if (input !== "") {
      updateRecentSearches(input);
      navigation.navigate("Search Result", { data: shoes, input: input });
    } else {
      setIsSearching(false);
    }
  };

  const textInputRef = useRef(null);

  const handleSearchIconPress = () => {
    textInputRef.current.focus();
  };

  const updateRecentSearches = (input) => {
    setRecentSearches((recentSearches) => [input, ...recentSearches]);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
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
              <TouchableOpacity
                onPress={handleSearchIconPress}
                style={SearchStyles.searchTouchableArea}
              >
                <Image source={searchImage} style={SearchStyles.searchIcon} />
              </TouchableOpacity>
              <TextInput
                ref={textInputRef}
                value={input}
                onChangeText={(text) => setInput(text)}
                style={SearchStyles.searchBar}
                placeholder="Search"
                onFocus={handleSearch}
                onSubmitEditing={navigateSearch}
                returnKeyType="search"
              />
              <TouchableOpacity
                style={SearchStyles.cancelButton}
                onPress={handleSearchSubmit}
                activeOpacity={1}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
            <RecentSearch
              recentSearches={recentSearches}
              data={shoes}
              input={input}
              clearRecentSearches={clearRecentSearches}
            />
            <ActiveSearch data={shoes} input={input} />
          </>
        ) : (
          <>
            <View style={SearchStyles.searchContainer}>
              <TouchableOpacity
                onPress={handleSearchIconPress}
                style={SearchStyles.searchTouchableArea}
              >
                <Image source={searchImage} style={SearchStyles.searchIcon} />
              </TouchableOpacity>
              <TextInput
                ref={textInputRef}
                value={input}
                onChangeText={(text) => setInput(text)}
                style={SearchStyles.searchBar}
                placeholder="Search"
                onFocus={handleSearch}
                onSubmitEditing={navigateSearch}
                returnKeyType="search"
              />
            </View>
            <ScrollView
              horizontal
              style={{ flexGrow: 0 }}
              showsHorizontalScrollIndicator={false}
            >
              <View style={SearchStyles.categories}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory(null)}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === null &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === null
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory("nike")}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === "nike" &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === "nike"
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    Nike
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory("adidas")}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === "adidas" &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === "adidas"
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    Adidas
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory("jordan")}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === "jordan" &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === "jordan"
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    Jordan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory("converse")}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === "converse" &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === "converse"
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    Converse
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory("vans")}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === "vans" &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === "vans"
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    Vans
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => filterByCategory("puma")}
                  style={[
                    SearchStyles.categoryText,
                    selectedCategory === "puma" &&
                      SearchStyles.categoryTextSelected,
                  ]}
                >
                  <Text
                    style={[
                      selectedCategory === "puma"
                        ? { color: "black" }
                        : { color: "grey" },
                    ]}
                  >
                    Puma
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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

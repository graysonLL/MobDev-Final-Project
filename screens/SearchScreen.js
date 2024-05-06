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

export default function SearchScreen({ route }) {
  const shoes = SearchData();
  const [input, setInput] = useState("");

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView style={SearchStyles.container} behavior="padding">
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={SearchStyles.searchBar}
          placeholder="Search"
        />
        <Text>Categories</Text>
        <SearchFilter data={shoes} input={input} setInput={setInput} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

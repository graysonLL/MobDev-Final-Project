import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import AuthSelectStyles from "../styles/AuthSelectStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import drake from "../images/drake.png";

export default function AuthSelectScreen({ route }) {
  const navigation = useNavigation();
  return (
    <View style={AuthSelectStyles.container}>
      <Image source={drake} style={AuthSelectStyles.drakeImage} />
      <TouchableOpacity
        style={AuthSelectStyles.signupButton}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={AuthSelectStyles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={AuthSelectStyles.options}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={AuthSelectStyles.option}>Login </Text>
        </TouchableOpacity>
        <Text>or </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={AuthSelectStyles.option}>Start browsing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

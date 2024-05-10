import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import SignupStyles from "../styles/SignupStyles";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (email == "" || password == "" || confirmPassword == "" || name == "") {
      alert("Please fill up all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      var check = signUp(name, email, password);
      if (check == true) {
        navigation.navigate("Login");
      }
    }
  };
  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={SignupStyles.container}>
        <TextInput
          style={SignupStyles.input}
          placeholder="First and Last name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={SignupStyles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={SignupStyles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
        <TextInput
          style={SignupStyles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          secureTextEntry
          value={confirmPassword}
        />
        <TouchableOpacity
          onPress={handleSignUp}
          style={SignupStyles.signupButton}
        >
          <Text style={SignupStyles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={SignupStyles.signUpText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

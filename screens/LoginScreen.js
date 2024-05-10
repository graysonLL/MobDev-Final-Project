import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  LoginStylesheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import LoginStyles from "../styles/LoginStyles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = () => {
    login(email, password);
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={LoginStyles.container}>
        <TextInput
          style={LoginStyles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={LoginStyles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={LoginStyles.signUpText}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

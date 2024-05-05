import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ route }) {
  const { login } = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          login();
        }}
      >
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
}

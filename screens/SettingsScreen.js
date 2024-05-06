import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SettingsScreen({ route }) {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Buying")}>
        <Text>Buying</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

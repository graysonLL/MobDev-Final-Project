import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SettingsLoggedOutStyles from "../styles/SettingsLoggedOutStyles";

export default function SettingsScreenLoggedOut({ route }) {
  const navigation = useNavigation();
  return (
    <View style={SettingsLoggedOutStyles.container}>
      <View style={SettingsLoggedOutStyles.messageContainer}>
        <Text style={SettingsLoggedOutStyles.message}>
          Sign up or login to access bids, shipping information, and account
          details
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={SettingsLoggedOutStyles.buttonSignup}
      >
        <Text style={SettingsLoggedOutStyles.textSignup}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={SettingsLoggedOutStyles.buttonLogin}
      >
        <Text style={SettingsLoggedOutStyles.textLogin}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

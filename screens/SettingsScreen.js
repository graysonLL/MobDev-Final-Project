import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import images from "../images/imagesExport";

export default function SettingsScreen({ route }) {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.itemContainer}
      >
        <Image source={images.profile} style={styles.image} />
        <View style={styles.itemContent}>
          <Text style={styles.heading}>Profile</Text>
          <Text>Name, Email, Password, Shoe Size</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate("Buying")}
        style={styles.itemContainer}
      >
        <Image source={images.buying} style={styles.image} />
        <View style={styles.itemContent}>
          <Text style={styles.heading}>Buying</Text>
          <Text>In-Progress, Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Wallet")}
        style={styles.itemContainer}
      >
        <Image source={images.wallet} style={styles.image} />
        <View style={styles.itemContent}>
          <Text style={styles.heading}>Wallet</Text>
          <Text>Payment Details</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={styles.itemContainer}
      >
        <Image source={images.logout} style={styles.image} />
        <View style={styles.itemContent}>
          <Text style={styles.heading}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 0,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 1,
    // alignItems: "center",
    // justifyContent: "center",
    height: "auto",
    borderWidth: 1, // Specify the border width
    borderColor: "#000", // Specify the border color
    flexDirection: "row",
  },

  itemContent: {},

  image: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignSelf: "center",
  },

  heading: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

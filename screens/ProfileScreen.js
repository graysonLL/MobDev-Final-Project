import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import images from "../images/imagesExport";


export default function ProfileScreen({ route }) {
  const { users, userToken } = useContext(AuthContext);

  const currentUser = users.find((user) => user.email === userToken);

  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate("Edit Profile", { user: currentUser });
  };

  const handleEditShipping = () => {
    navigation.navigate("Edit Shipping Details", { user: currentUser });
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.container} onPress={handleEditProfile}>
        <View style={styles.left}>
          <Image source={images.profile} style={styles.image1} />
        </View>

        <View style={styles.middle}>
          <Text style={styles.header}>Personal Information</Text>

          <Text style={styles.header1}>Name</Text>
          <Text>{currentUser.name}</Text>

          <Text style={styles.header1}>Username</Text>
          <Text>{currentUser.username}</Text>

          <Text style={styles.header1}>Email</Text>
          <Text>{currentUser.email}</Text>

          <Text style={styles.header1}>Phone Number</Text>
          <Text>{currentUser.number}</Text>

          <Text style={styles.header1}>Shoe Size (US)</Text>
          <Text>{currentUser.size}</Text>

          <Text style={styles.header1}>Password</Text>
          <Text>*************</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.link}>EDIT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={handleEditShipping}>
        <View style={styles.left}>
          <Image source={images.shipping} style={styles.image2} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.header}>Shipping </Text>

          <Text style={styles.header1}>First Name</Text>
          <Text>{currentUser.firstName}</Text>

          <Text style={styles.header1}>Last Name</Text>
          <Text>{currentUser.lastName}</Text>

          <Text style={styles.header1}>Country</Text>
          <Text>{currentUser.country}</Text>

          <Text style={styles.header1}>Address</Text>
          <Text>{currentUser.address}</Text>

          <Text style={styles.header1}>Address 2</Text>
          <Text>{currentUser.address2}</Text>

          <Text style={styles.header1}>City</Text>
          <Text>{currentUser.city}</Text>

          <Text style={styles.header1}>State/Region</Text>
          <Text>{currentUser.region}</Text>

          <Text style={styles.header1}>Postal Code</Text>
          <Text>{currentUser.postalCode}</Text>

          <Text style={styles.header1}>Phone Number</Text>
          <Text>{currentUser.shippingNumber}</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.link}>EDIT</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
    marginTop: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },

  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  header1: {
    marginTop: 8,
    fontWeight: "bold",
  },

  image1: {
    height: 17,
    width: 17,
    marginTop: 2,
  },

  image2: {
    height: 20,
    width: 20,
    marginTop: 0,
  },

  left: {
    padding: 10,
  },

  middle: {
    padding: 10,
    flex: 1,
  },

  right: {
    padding: 10,
    alignItems: "flex-end",
  },

  link: {
    fontSize: 16,
    color: "purple",
    marginTop: 3,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});

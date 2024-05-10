import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import images from "../images/imagesExport";

import Users from "../resources/Users";

export default function ProfileScreen({ route }) {

  const user = Users[0];
  return (
    <ScrollView>

      <TouchableOpacity style={styles.container}>

        <View style={styles.left}>
          <Image source={images.profile} style={styles.image1} />
        </View>

        <View style={styles.middle}>
          <Text style={styles.header}>Personal Information</Text>

          <Text style={styles.header1}>Name</Text>
          <Text>{user.name}</Text>

          <Text style={styles.header1}>Username</Text>
          <Text>{user.username}</Text>

          <Text style={styles.header1}>Email</Text>
          <Text>{user.email}</Text>

          <Text style={styles.header1}>Phone Number</Text>
          <Text>{user.number}</Text>

          <Text style={styles.header1}>Shoe Size</Text>
          <Text>{user.size}</Text>

          <Text style={styles.header1}>Password</Text>
          <Text>*************</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.link}>
            EDIT
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>

        <View style={styles.left}>
          <Image source={images.shipping} style={styles.image2} />
        </View>
        <View style={styles.middle}>

          <Text style={styles.header}>Shipping </Text>

          <Text style={styles.header1}>First Name</Text>
          <Text>{user.firstName}</Text>

          <Text style={styles.header1}>Last Name</Text>
          <Text>{user.lastName}</Text>

          <Text style={styles.header1}>Country</Text>
          <Text>{user.country}</Text>

          <Text style={styles.header1}>Address</Text>
          <Text>{user.address}</Text>

          <Text style={styles.header1}>Address 2</Text>
          <Text>{user.address2}</Text>

          <Text style={styles.header1}>City</Text>
          <Text>{user.city}</Text>

          <Text style={styles.header1}>State/Region</Text>
          <Text>{user.region}</Text>

          <Text style={styles.header1}>Postal Code</Text>
          <Text>{user.postalCode}</Text>

          <Text style={styles.header1}>Phone Number</Text>
          <Text>{user.shippingNumber}</Text>

        </View>

        <View style={styles.right}>
          <Text style={styles.link}>
            EDIT
          </Text>
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
    marginBottom: 10
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
    height: 30,
    width: 30,
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
    marginTop: 12,
    fontWeight: "bold",
  }
});

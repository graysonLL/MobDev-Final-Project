import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import images from "../images/imagesExport";

export default function ProfileScreen({ route }) {
  return (
    <ScrollView>

      <TouchableOpacity style={styles.container}>

        <View style={styles.left}>
          <Image source={images.profile} style={styles.image1} />
        </View>

        <View style={styles.middle}>
          <Text style={styles.header}>Personal Information</Text>

          <Text style={styles.header1}>Name</Text>
          <Text>John Doe</Text>

          <Text style={styles.header1}>Username</Text>
          <Text>lisanalgaib42</Text>

          <Text style={styles.header1}>Email</Text>
          <Text>johndoe3@gmail.com</Text>

          <Text style={styles.header1}>Phone Number</Text>
          <Text>+63 917 165 1123</Text>

          <Text style={styles.header1}>Shoe Size</Text>
          <Text>10</Text>

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
          <Text>John</Text>

          <Text style={styles.header1}>Last Name</Text>
          <Text>Doe</Text>

          <Text style={styles.header1}>Country</Text>
          <Text>Philippines</Text>

          <Text style={styles.header1}>Address</Text>
          <Text>2118 California Street</Text>

          <Text style={styles.header1}>Address 2</Text>
          <Text>Maria Luisa Condominium, Unit 148</Text>

          <Text style={styles.header1}>City</Text>
          <Text>Mandaue</Text>

          <Text style={styles.header1}>State/Region</Text>
          <Text>Region VII - Central Visayas</Text>

          <Text style={styles.header1}>Postal Code</Text>
          <Text>6014</Text>

          <Text style={styles.header1}>Phone Number</Text>
          <Text>+63 917 165 1123</Text>

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

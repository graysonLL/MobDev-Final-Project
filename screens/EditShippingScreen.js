import React, { useState, useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import images from "../images/imagesExport";



export default function EditShippingScreen({ route }) {
  const navigation = useNavigation();
  const { updateUser } = useContext(AuthContext);

  if (!route || !route.params || !route.params.user) {
    console.error("Route or route params is undefined");
    return null;
  }

  const { user } = route.params;
  const { firstName, lastName, country, address, address2, city, region, postalCode, shippingNumber } = user;

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newCountry, setNewCountry] = useState(country);
  const [newAddress, setNewAddress] = useState(address);
  const [newAddress2, setNewAddress2] = useState(address2);
  const [newCity, setNewCity] = useState(city);
  const [newRegion, setNewRegion] = useState(region);
  const [newPostalCode, setNewPostalCode] = useState(postalCode);
  const [newShippingNumber, setNewShippingNumber] = useState(shippingNumber);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      firstName: newFirstName,
      lastName: newLastName,
      country: newCountry,
      address: newAddress,
      address2: newAddress2,
      city: newCity,
      region: newRegion,
      postalCode: newPostalCode,
      shippingNumber: newShippingNumber,
    };
    updateUser(updatedUser);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={newFirstName}
          onChangeText={(text) => setNewFirstName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={newLastName}
          onChangeText={(text) => setNewLastName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          value={newCountry}
          onChangeText={(text) => setNewCountry(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={newAddress}
          onChangeText={(text) => setNewAddress(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address 2</Text>
        <TextInput
          style={styles.input}
          value={newAddress2}
          onChangeText={(text) => setNewAddress2(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={newCity}
          onChangeText={(text) => setNewCity(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>State/Region</Text>
        <TextInput
          style={styles.input}
          value={newRegion}
          onChangeText={(text) => setNewRegion(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Postal Code</Text>
        <TextInput
          style={styles.input}
          value={newPostalCode}
          onChangeText={(text) => setNewPostalCode(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={newShippingNumber}
          onChangeText={(text) => setNewShippingNumber(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

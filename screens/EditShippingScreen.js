import React, { useState, useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { Picker } from "@react-native-picker/picker";
import PhoneInput from "react-native-phone-input";

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

  const regions = ["National Capital Region (NCR)", "Cordillera Administrative Region (CAR)", "Ilocos Region (Region I)", "Cagayan Valley (Region II)", "Central Luzon (Region III)", "Calabarzon (Region IV-A)", "Southwestern Tagalog Region (Mimaropa)", "Bicol Region (Region V)", "Western Visayas (Region VI)", "Central Visayas (Region VII)", "Eastern Visayas (Region VII)", "Zamboanga Peninsula (Region IX)", "Northern Mindanao (Region X)", "Davao Region (Region XI)", "Soccsksargen (Region XII)", "Caraga (Region XIII)", "Bangsamoro (BARMM)"]; // Add your regions here

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
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address (Street Address)</Text>
        <TextInput
          style={styles.input}
          value={newAddress}
          onChangeText={(text) => setNewAddress(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address 2 (Apartment, suite, unit, building, floor, etc.)</Text>
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
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={newRegion}
            onValueChange={(itemValue) => setNewRegion(itemValue)}
          >
            {regions.map((region) => (
              <Picker.Item key={region} label={region} value={region}/>
            ))}
          </Picker>
        </View>
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
        <PhoneInput
          style={styles.input}
          initialCountry="ph"
          value={newShippingNumber}
          onChangePhoneNumber={(text) => setNewShippingNumber(text)}
          countryPickerProps={{
            countryCodes: ['PH'],
          }}
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
  contentContainer: {
    paddingBottom: 40, // Adding padding to the bottom of the ScrollView
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
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

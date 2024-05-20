import React, { useState, useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { Picker } from "@react-native-picker/picker";
import PhoneInput from "react-native-phone-input";

export default function EditProfileScreen({ route }) {
  const navigation = useNavigation();
  const { updateUser } = useContext(AuthContext);

  if (!route || !route.params || !route.params.user) {
    console.error("Route or route params is undefined");
    return null;
  }

  const { user } = route.params;
  const { name, username, email, number, size, password } = user;

  const [newName, setNewName] = useState(name);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(number);
  const [newShoeSize, setNewShoeSize] = useState(size);
  const [newPassword, setNewPassword] = useState(password);
  const [showPassword, setShowPassword] = useState(false);

  const sizes = [
    "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13",
  ];

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: newName,
      username: newUsername,
      email: newEmail,
      number: newPhoneNumber,
      size: newShoeSize,
      password: newPassword,
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
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={(text) => setNewName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={newUsername}
          onChangeText={(text) => setNewUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={newEmail}
          editable={false}
          onChangeText={(text) => setNewEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <PhoneInput
          style={styles.input}
          initialCountry="ph"
          value={newPhoneNumber}
          onChangePhoneNumber={(text) => setNewPhoneNumber(text)}
          countryPickerProps={{
            countryCodes: ['PH'],
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shoe Size (US)</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={newShoeSize}
            onValueChange={(itemValue) => setNewShoeSize(itemValue)}
          >
            {sizes.map((size) => (
              <Picker.Item key={size} label={size} value={size} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={showPassword ? newPassword : '********'}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggleButton}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
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
    overflow: 'hidden', // To make the picker smaller
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
  toggleButton: {
    color: "blue",
    marginLeft: 10,
  },
});

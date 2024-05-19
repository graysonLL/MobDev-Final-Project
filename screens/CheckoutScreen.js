import React, { useContext } from "react";
import { Text, StyleSheet, View, Image, Button, KeyboardAvoidingView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import uuid from 'react-native-uuid';
import { AuthContext } from "../context/AuthContext";

export default function CheckoutScreen({ route }) {
  const { items } = route.params;
  const navigation = useNavigation();
  const { users, userToken } = useContext(AuthContext);
  const currentUser = users.find((user) => user.email === userToken);

  const calculateSubtotal = () => {
    let subtotal = 0;
    items.forEach((item) => {
      const itemPrice = parseFloat(item.price);
      subtotal += itemPrice;
    });
    return subtotal;
  };

  const calculateTotal = () => {
    let subtotal = calculateSubtotal();
    if (typeof subtotal === 'number') {
      let total = subtotal + 10;
      return total.toFixed(2);
    } else {
      return 'Error: Subtotal is not a valid number';
    }
  };

  const saveOrder = async (newOrder) => {
    try {
      if (userToken) {
        const storedOrders = await AsyncStorage.getItem(`orders_${userToken}`);
        const existingOrders = storedOrders ? JSON.parse(storedOrders) : [];
        const updatedOrders = [...existingOrders, newOrder];

        await AsyncStorage.setItem(
          `orders_${userToken}`,
          JSON.stringify(updatedOrders)
        );
      }
    } catch (error) {
      console.error("Error saving order data:", error);
    }
  };

  const handleConfirmOrder = () => {
    if (
      !currentUser.firstName &&
      !currentUser.lastName &&
      !currentUser.country &&
      !currentUser.address1 &&
      !currentUser.city &&
      !currentUser.region &&
      !currentUser.postalCode &&
      !currentUser.shippingNumber
    ) {
      return Alert.alert('Error', 'Please fill in all shipping details in your Profile page before confirming your order.');
    }

    const newOrder = {
      id: uuid.v4(),
      items,
      date: new Date().toISOString().split('T')[0],
      deliveryStatus: 'In Progress',
    };

    saveOrder(newOrder);

    Alert.alert('Success', 'Order successfully placed!');
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Shipping Details</Text>
        <View style={styles.shippingDetailsContainer}>
          <Text style={styles.detailText}>Name: {currentUser.firstName} {currentUser.lastName}</Text>
          <Text style={styles.detailText}>Country: {currentUser.country}</Text>
          <Text style={styles.detailText}>Address 1: {currentUser.address1}</Text>
          <Text style={styles.detailText}>Address 2: {currentUser.address2}</Text>
          <Text style={styles.detailText}>City: {currentUser.city}</Text>
          <Text style={styles.detailText}>Region: {currentUser.region}</Text>
          <Text style={styles.detailText}>Postal Code: {currentUser.postalCode}</Text>
          <Text style={styles.detailText}>Contact Number: {currentUser.shippingNumber}</Text>
        </View>

        <Text style={styles.heading}>Payment Method</Text>
        <View style={styles.shippingDetailsContainer}>
          <Text style={styles.detailText}>CASH ON DELIVERY (Other methods will be available soon!)</Text>
        </View>

        <Text style={styles.heading}>Product Details</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.productContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.totalPrice}>SUBTOTAL: $ {calculateSubtotal().toFixed(2)}</Text>
        <Text style={styles.totalPrice}>SHIPPING: $ 10.00</Text>
        <Text style={styles.totalPrice}>TOTAL: $ {calculateTotal()}</Text>

        <Button title="Confirm Order" onPress={handleConfirmOrder} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  shippingDetailsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 20,
  },
});

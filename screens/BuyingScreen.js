import React, { useState, useEffect, useContext } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const BuyingScreen = () => {
  const [inProgressOrders, setInProgressOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const { userToken } = useContext(AuthContext);
  const navigation = useNavigation();

  const loadOrders = async () => {
    try {
      if (userToken) {
        const storedOrders = await AsyncStorage.getItem(`orders_${userToken}`);
        if (storedOrders) {
          const ordersData = JSON.parse(storedOrders);
          const inProgress = ordersData.filter(
            (order) => order.deliveryStatus !== "Delivered"
          );
          const completed = ordersData.filter(
            (order) => order.deliveryStatus === "Delivered"
          );
          setInProgressOrders(inProgress);
          setCompletedOrders(completed);
        }
      }
    } catch (error) {
      console.error("Error loading orders data:", error);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const navigateToBuyingHistory = () => {
    navigation.navigate('Buying History');
  };

  const cancelOrder = async (orderId) => {
    try {
      const updatedOrders = inProgressOrders.filter(order => order.id !== orderId);
      await AsyncStorage.setItem(`orders_${userToken}`, JSON.stringify(updatedOrders));
      setInProgressOrders(updatedOrders);
      Alert.alert('Success', 'Order canceled successfully!');
    } catch (error) {
      console.error("Error canceling order:", error);
      Alert.alert('Error', 'Failed to cancel order. Please try again.');
    }
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text>Order ID: {item.id}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Delivery Status: {item.deliveryStatus}</Text>
      <Text>Items:</Text>
      {item.items.map((orderItem, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>Name: {orderItem.title}</Text>
          <Text>Price: ${orderItem.price}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => cancelOrder(item.id)}
      >
        <Text style={styles.cancelButtonText}>Cancel Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>In-Progress Orders</Text>
      {inProgressOrders.length > 0 ? (
        <FlatList
          data={inProgressOrders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderOrderItem}
        />
      ) : (
        <Text>No orders in-progress</Text>
      )}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={navigateToBuyingHistory}
      >
        <Text style={styles.buttonText}>View Buying History</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  orderContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  itemContainer: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  cancelButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BuyingScreen;

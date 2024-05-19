import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

const BuyingHistoryScreen = () => {
  const { userToken } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      if (userToken) {
        const storedOrders = await AsyncStorage.getItem(`orders_${userToken}`);
        if (storedOrders) {
          const ordersData = JSON.parse(storedOrders);
          setOrders(ordersData);
        }
      }
    } catch (error) {
      console.error("Error loading orders data:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text>Order ID: {item.id}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Delivery Status: {item.deliveryStatus}</Text>
      <Text>Items:</Text>
      {item.items.map((orderItem, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>Name: {orderItem.name}</Text>
          <Text>Price: ${orderItem.price}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No buying history found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  },
});

export default BuyingHistoryScreen;

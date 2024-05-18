import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CartList from "../resources/CartList";
import CartStyles from "../styles/CartStyles";
import bin from "../images/trashIcon.png"
import { useEffect } from "react";

export default function CartScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { cartItems, loadCartItems, removeCartItem } = CartList();
  const size = route.params?.size || '7';

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadCartItems();
    });
    return unsubscribe;
  }, [navigation, loadCartItems]);

  const handleRemove = (itemKey) => {
    removeCartItem(itemKey);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
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

  return (
    <FlatList
      data={cartItems}
      numColumns={1}
      ListFooterComponent={() => (
        cartItems.length > 0 && (
          <View>
            <View style={CartStyles.finalDetailsContainer}>
              <View style={CartStyles.wordsContainer}>
                <Text style={CartStyles.textFormatting}>Subtotal:</Text>
                <Text style={CartStyles.textFormatting}>Shipping:</Text>
                <Text style={CartStyles.textFormatting}>Total:</Text>
              </View>
              <View style={CartStyles.wordsContainer}>
                <Text style={CartStyles.textFormatting}>$ {calculateSubtotal().toFixed(2)}</Text>
                <Text style={CartStyles.textFormatting}>$ 10</Text>
                <Text style={CartStyles.textFormatting}>$ {calculateTotal()}</Text>
              </View>
            </View>
            <TouchableOpacity  style={CartStyles.checkOut}>
              <Text style={{fontSize: 20, color:'white'}}>Check Out</Text>
            </TouchableOpacity>   
          </View>
        )
      )}
      renderItem={({ item }) => (
        <View style={CartStyles.itemContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Product", { item })}>
            <Image source={item.image} style={CartStyles.itemImage} />
          </TouchableOpacity>
          <View style={CartStyles.detailsContainer}>
            <Text style={CartStyles.itemTitle}>{item.title}</Text>
            <Text style={CartStyles.itemPrice}>{item.price}</Text>
            <Text style={CartStyles.itemPrice}> Size: {size}</Text>
          </View>
          <TouchableOpacity
            style={CartStyles.removeButton}
            onPress={() => handleRemove(item.key)}
          >
            <Image source={bin} style={CartStyles.trashBin} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}



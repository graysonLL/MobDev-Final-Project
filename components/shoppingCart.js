import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import shoppingCartImage from "../images/shoppingCart.png"
import { useNavigation } from "@react-navigation/native";
const {height} = Dimensions.get('window')

const shoppingCart = () => {
  
  const navigation = useNavigation();
  
  return (
    <View>
        <TouchableOpacity style={styles.circularContainer} 
          onPress={()=> navigation.navigate("Cart")}>
          <Image source={shoppingCartImage} style={styles.shoppingCartImage}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    circularContainer:{
        position: 'absolute',
        right: 15,
        bottom: 40,
        height: height * 0.09,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5, 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84
      },
      shoppingCartImage:{
        marginRight: 7,
        height: 40,
        width: 50,
        resizeMode: 'contain',
      }
});

export default shoppingCart;

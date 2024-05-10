import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import styles from "../styles/ProductStyles"
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";


export default function ProductScreen({
  route: {
    params: { title, price, body, image },
  },
}) {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState(); 
  const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13"];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.picContainer}>
        <Image source={image} style={styles.itemImage} />
      </View>

      {/* Size seciton */}
      <View style={styles.sizeContainer}>
        <View style={styles.sizeText}>
          <Text style={{fontSize: 18}}>Select Your Size!</Text>
        </View>

        <View style={styles.dropDownContainer}>
          <Picker 
            mode='dropdown'
            numberOfLines={5}
            selectedValue={selectedSize}
            style={styles.dropDown}
            onValueChange={(itemValue) => setSelectedSize(itemValue)}
            
          >
          {sizes.map((size)=> (
            <Picker.Item key={size} label = {size} value={size} style={{fontSize:18}}/>
          ))}
          </Picker>
        </View>
      </View>   
      {/* Size seciton */}



    </View>
  );
}


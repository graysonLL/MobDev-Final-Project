import { View, StyleSheet, Image } from "react-native";
import logo from "../images/icon.png";






export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={logo} style={styles.image} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },

    image: {
        width: 500,
        height: 500,
        resizeMode: "cover",
    }

});
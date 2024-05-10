import { StyleSheet } from "react-native";

const SettingsLoggedOutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  messageContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  message: {
    textAlign: "center",
  },

  buttonSignup: {
    width: 340,
    padding: 20,
    backgroundColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textSignup: {
    color: "white",
  },

  buttonLogin: {
    width: 340,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textLogin: {
    color: "black",
  },
});

export default SettingsLoggedOutStyles;

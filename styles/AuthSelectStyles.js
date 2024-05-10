import { StyleSheet } from "react-native";

const AuthSelectStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },

  signupButton: {
    width: 340,
    padding: 20,
    backgroundColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  signupText: {
    color: "white",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  options: {
    flexDirection: "row",
  },
  option: {
    textDecorationLine: "underline",
  },
});

export default AuthSelectStyles;

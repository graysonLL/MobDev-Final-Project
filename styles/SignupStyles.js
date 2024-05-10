import { StyleSheet } from "react-native";
const SignupStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  signupText: {
    color: "white",
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
});

export default SignupStyles;

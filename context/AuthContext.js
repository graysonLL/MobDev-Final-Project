import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [users, setUsers] = useState([]);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  const login = async (email, password) => {
    console.log("wtf");
    if (email === "" || password === "") {
      alert("Please fill up all fields");
      return;
    }

    const savedUsers = await AsyncStorage.getItem("users");
    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);
      const user = parsedUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setUserToken(user.email);
        return;
      }
    }

    alert("Invalid email or password");
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const savedUsers = await AsyncStorage.getItem("users");
      if (savedUsers) {
        setUsers(JSON.parse(savedUsers));
      }
    } catch (error) {
      console.error("Error loading users: ", error);
    }
  };

  const saveUsers = async (users) => {
    try {
      await AsyncStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      console.error("Error saving users: ", error);
    }
  };

  const signUp = async (name, email, password) => {
    setIsLoading(true);
    if (users.find((user) => user.email === email)) {
      alert("Email already exists!");
      setIsLoading(false);
      return false;
    } else {
      const newUser = {
        name,
        email,
        password,
        phoneNumber: "",
        shoeSize: "",
        username: "",
        country: "",
        address1: "",
        address2: "",
        city: "",
        region: "",
        postalCode: "",
        shippingNumber: "",
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      await saveUsers([...users, newUser]);
      alert("Sign up successful!");
      setIsLoading(false);
      await login(email, password);
    }
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, signUp, isLoading, userToken, users }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [users, setUsers] = useState([]);

  const login = async (email, password) => {
    if (email == "" || password == "") {
      alert("Please fill up all fields");
      return;
    }
    setIsLoading(true);
    try {
      const savedUsers = await AsyncStorage.getItem("users");
      if (savedUsers) {
        const parsedUsers = JSON.parse(savedUsers);
        const user = parsedUsers.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          setUserToken(user.email);
          await AsyncStorage.setItem("userToken", user.email);
          setIsLoading(false);
          return;
        }
      }
      alert("Invalid email or password");
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Error logging in. Please try again.");
    }
    setIsLoading(false);
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

  const signUp = async (email, password) => {
    setIsLoading(true);
    if (users.find((user) => user.email === email)) {
      alert("Email already exists!");
      setIsLoading(false);
      return false;
    } else {
      setUsers((prevUsers) => [...prevUsers, { email, password }]);
      await saveUsers([...users, { email, password }]);
      alert("Sign up successful!");
      setIsLoading(false);
      return true;
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
      value={{ login, logout, signUp, isLoading, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppNav } from "./navigation/AppNav";
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

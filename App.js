import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppNav } from './navigation/AppNav';
import { AuthProvider } from './context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from './screens/SplashScreenView';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });



  return <>
    {isShowSplash ? <SplashScreen /> :
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </GestureHandlerRootView>
    }
  </>
}

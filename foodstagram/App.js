import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import ThemeManager, { useTheme } from './assets/themes';
import { Switch } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Stack = createStackNavigator();
export default function App() {
  return (
    <ThemeManager>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeManager>
  );
}

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import ThemeManager, { useTheme } from './assets/themes';
import { Switch } from 'react-native';
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <ThemeManager>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeManager>
  );
}

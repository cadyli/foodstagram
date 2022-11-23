import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ThemeManager, { useTheme } from './assets/themes';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feedpage from "./pages/Feedpage";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import OtherProfile from "./pages/OtherProfile";
import CreatePost from "./pages/CreatePost";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/*
        <Stack.Screen
          name="OtherProfile"
          component={OtherProfile}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false }}
        ></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>   
    </ThemeManager>
  );
}

function Home() {
  return (
  <Tab.Navigator
        initialRouteName="Feedpage"
        >
            <Tab.Screen name="Feedpage" component={Feedpage} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
  )
}

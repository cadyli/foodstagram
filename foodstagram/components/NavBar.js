import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from "styled-components/native";
import { useTheme } from "../assets/themes";

//Screens
import Feedpage from '../pages/Feedpage';
import CreatePost from '../pages/CreatePost';
import Settings from '../pages/Settings';

/*
this is the bottom bar
left: homepage (feed)
middle: post picture
right: view own profile
*/

const homeName = "Feedpage";
const postName = "CreatePost";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
        <Tab.Navigator
        initialRouteName={homeName}
        >
            <Tab.Screen name={homeName} component={Feedpage} />
            <Tab.Screen name={postName} component={CreatePost} />
            <Tab.Screen name={settingsName} component={Settings} />
        </Tab.Navigator>
  )
}

export default NavBar;


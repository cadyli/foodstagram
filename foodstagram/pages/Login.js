import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import ThemeManager, { useTheme } from '../assets/themes';
import { Switch } from 'react-native';
import styled from 'styled-components/native';

const icon = require("../assets/images/icon.png");

export default function Login({ navigation }) {
  const theme = useTheme()
  const [username, handleUsername] = useState("");
  const [password, handlePassword] = useState("");
  return (
    <Container>
    <Switch 
          value={theme.mode === 'dark'}
          onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
        />
      <Image source={icon} style={styles.iconImage} />
      <Text style={styles.titleText}>FOODSTAGRAM</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleUsername}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={handlePassword}
        value={password}
        placeholder="password"
      />
      <Pressable onPress={() => navigation.navigate("Register")}>
        <View style={styles.bottomText}>
          <Text>Don't have an account? </Text>
          <Text style={styles.button}>Register</Text>
        </View>
      </Pressable>
      <Text style={styles.baseText}>
        “you only miss 100% of the shots you dont take”
      </Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  /* add this */
  background: ${props => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
  display: "flex";
  marginTop: "20%";
`

const styles = StyleSheet.create({
  titleText: {
    display: "flex",
    fontFamily: "NewSun_YandiDesigns",
    fontSize: 48,
    fontWeight: "bold",
    justifyContent: "center",
  },
  button: {
    fontFamily: "Montserrat-Bold",
  },
  baseText: {
    fontFamily: "Montserrat-Regular",
  },
  iconImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
  bottomText: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    backgroundColor: "white",
    borderRadius: "10px",
    fontFamily: "Montserrat-Regular",
  },
});

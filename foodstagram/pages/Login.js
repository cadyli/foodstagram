import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../assets/themes";
import { Switch } from "react-native";
import styled from "styled-components/native";

const icon = require("../assets/images/icon.png");

export default function Login({ navigation }) {
  const theme = useTheme();
  const [username, handleUsername] = useState("");
  const [password, handlePassword] = useState("");
  const handleLogin = function () {};
  return (
    <Container>
      <Switch
        value={theme.mode === "dark"}
        onValueChange={(value) => theme.setMode(value ? "dark" : "light")}
      />
      <Image source={icon} style={styles.iconImage} />
      <Text style={styles.titleText}>FOODSTAGRAM</Text>
      <View>
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
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.forgotPasswordText}>Forgotten password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginButton}
          color="#EFD796"
        >
          <Text>login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomText}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.button}>Register</Text>
        </Pressable>
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  /* add this */
  background: ${(props) => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
  display: "flex";
  margintop: "20%";
`;

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
  loginButton: {
    height: 40,
    // margin: 12,
    marginVertical: 12,
    borderWidth: 3,
    borderColor: "#EFD796",
    padding: 10,
    backgroundColor: "#EFD796",
    borderRadius: "10px",
    fontFamily: "Montserrat-Bold",
    alignItems: "center",
  },
  baseText: {
    fontFamily: "Montserrat-Regular",
  },
  forgotPasswordText: {
    fontFamily: "Montserrat-Regular",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "10px",
    marginTop: "-5px",
    marginBottom: "5px",
  },
  iconImage: {
    width: "150px",
    height: "150px",
    marginBottom: "20px",
    margin: 12,
    // resizeMode: "cover",
    // flex: 1,
    // alignItems: "center",
  },
  bottomText: {
    position: "absolute",
    bottom: "20px",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 40,
    // margin: 12,
    marginVertical: 12,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    backgroundColor: "white",
    borderRadius: "10px",
    fontFamily: "Montserrat-Regular",
  },
});

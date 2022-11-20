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
      <Title>FOODSTAGRAM</Title>
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
          <ForgotText>Forgotten password?</ForgotText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginButton}
          color="#EFD796"
        >
          <Text style={styles.button}>login</Text>
        </TouchableOpacity>
      </View>
      <BottomText>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.button}>Register</Text>
        </Pressable>
      </BottomText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
  display: "flex";
  margintop: "20%";
`;

const BaseText = styled.Text`
  font-family: Montserrat-Regular;
  color: ${(props) => props.theme.text};
`;

const Title = styled(BaseText)`
  display: flex;
  font-family: NewSun_YandiDesigns;
  font-size: 48;
  justify-content: center;
`;

const ForgotText = styled(BaseText)`
  display: flex;
  justify-content: flex-end;
  font-size: 10;
  margin-top: -5;
  margin-bottom: 5;
`;

const BottomText = styled(BaseText)`
  position: absolute;
  bottom: 20;
`;

const styles = StyleSheet.create({
  button: {
    fontFamily: "Montserrat-Bold",
  },
  loginButton: {
    height: 40,
    marginVertical: 12,
    borderWidth: 3,
    borderColor: "#EFD796",
    padding: 10,
    backgroundColor: "#EFD796",
    borderRadius: "10px",
    fontFamily: "Montserrat-Bold",
    alignItems: "center",
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
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    backgroundColor: "white",
    borderRadius: "10px",
    fontFamily: "Montserrat-Regular",
  },
});

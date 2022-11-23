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
import ButtonCustom from "../components/ButtonCustom";

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
        <Input
          onChangeText={handleUsername}
          value={username}
          placeholder="username"
        />
        <Input
          onChangeText={handlePassword}
          value={password}
          placeholder="password"
        />
        <TouchableOpacity onPress={handleLogin}>
          <ForgotText>Forgotten password?</ForgotText>
        </TouchableOpacity>
        <Button onPress={handleLogin}>
          <ButtonText>login</ButtonText>
        </Button>
      </View>
      <BottomText>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.button}>Register</Text>
        </Pressable>
      </BottomText>
      <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.button}>Home</Text>
        </Pressable>
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

const ButtonText = styled.Text`
  font-family: Montserrat-Bold;
  color: ${(props) => props.theme.textAlt};
`;

const Button = styled.TouchableOpacity`
  height: 40;
  margin-vertical: 12;
  border-width: 3;
  border-color: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.border};
  border-radius: 10;
  font-family: Montserrat-Bold;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  height: 40;
  margin-vertical: 12;
  border-width: 3;
  border-color: white;
  padding: 10px;
  background-color: white;
  border-radius: 10;
  font-family: Montserrat-Regular;
`;

const styles = StyleSheet.create({
  iconImage: {
    width: "150px",
    height: "150px",
    marginBottom: "20px",
    margin: 12,
    // resizeMode: "cover",
    // flex: 1,
    // alignItems: "center",
  },
});

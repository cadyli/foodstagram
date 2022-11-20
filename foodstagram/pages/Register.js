import React, { useState } from 'react';
import ThemeManager, { useTheme } from '../assets/themes';
import styled from 'styled-components/native';
import {
  Image,
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";


const Register = () => {
  const theme = useTheme()
  const [firstname, handleFirstname] = useState("");
  const [lastname, handleLastname] = useState("");
  const [email, handleEmail] = useState("");
  const [username, handleUsername] = useState("");
  const [setPassword, handleSetPassword] = useState("");
  const [confirmPassword, handleConfirmPassword] = useState("");
  return (
    <Container>
      <TextInput
        style={styles.input}
        onChangeText={handleFirstname}
        value={firstname}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleLastname}
        value={lastname}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleUsername}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleSetPassword}
        value={setPassword}
        placeholder="Set Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
      />
    </Container>
  )
}

export default Register;

const Container = styled.View`
  flex: 1;
  /* add this */
  background: ${props => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
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

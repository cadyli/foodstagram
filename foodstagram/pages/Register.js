import React, { useState } from 'react';
import ThemeManager, { useTheme } from '../assets/themes';
import styled from 'styled-components/native';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Register = ({navigation}) => {
  const theme = useTheme()
  const [firstname, handleFirstname] = useState("");
  const [lastname, handleLastname] = useState("");
  const [email, handleEmail] = useState("");
  const [username, handleUsername] = useState("");
  const [setPassword, handleSetPassword] = useState("");
  const [confirmPassword, handleConfirmPassword] = useState("");
  const [register, handleRegister] = useState("");
  return (
    <Container>
    <Title>FOODSTAGRAM</Title>
      <TextInput
        style={styles.input}
        onChangeText={handleFirstname}
        value={firstname}
        placeholder="first name"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleLastname}
        value={lastname}
        placeholder="last name"
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
        placeholder="set password"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleConfirmPassword}
        value={confirmPassword}
        placeholder="confirm password"
      />
<Pressable onPress={() => navigation.navigate("Feedpage")}>
          <Text> Feed</Text>
        </Pressable>
      <Button onPress={handleRegister}>
          <ButtonText>register</ButtonText>
        </Button>
        <BottomText>
      <Text>Already have an account?</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
          <Text> Login</Text>
        </Pressable>
        </BottomText>

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
`;

const Button = styled.TouchableOpacity`
  height: 40;
  width: 170;
  margin-vertical: 12;
  border-width: 10;
  border-color: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.border};
  border-radius: 10;
  font-family: Montserrat-Bold;
  align-items: center;
  justify-content: center;
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
`
const ButtonText = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 16px;
  color: ${(props) => props.theme.textAlt};
`;

const BottomText = styled(BaseText)`
  fontSize: 12px;
  justify-content: center;
`


const styles = StyleSheet.create({
  iconImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
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

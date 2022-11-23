import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useTheme } from "../assets/themes";
import styled from "styled-components/native";

export default function ButtonComp({ onPress }) {
  const theme = useTheme();
  return (
    <View>
      <Switch
        value={theme.mode === "dark"}
        onValueChange={(value) => theme.setMode(value ? "dark" : "light")}
      />
      <Button onPress={onPress}>
        <ButtonText>login</ButtonText>
      </Button>
    </View>
  );
}

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

const ButtonText = styled.Text`
  font-family: Montserrat-Bold;
  color: ${(props) => props.theme.textAlt};
`;

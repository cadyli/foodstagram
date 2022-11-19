import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      ></Button>
      <Text style={styles.baseText}>
        “you only miss 100% of the shots you dont take”
      </Text>
      <Text style={styles.titleText}>FOODSTAGRAM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Montserrat-Regular",
  },
  titleText: {
    fontFamily: "NewSun_YandiDesigns",
    fontSize: 20,
    fontWeight: "bold",
  },
});

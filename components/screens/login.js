/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri:
            "https://cdn.discordapp.com/attachments/757361195425726585/773705725788553226/InstitutoLogo.png",
        }}
      />
      <Input
        placeholder="Usuario"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" size={24} color="black" />}
      />
      <Button
        title="Entrar"
        titleStyle={{ color: "#6C0000" }}
        buttonStyle={{ backgroundColor: "white" }}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C0000",
    alignItems: "center",
    justifyContent: "center",
  },
});


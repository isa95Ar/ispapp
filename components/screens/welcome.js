/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Text } from "react-native-elements";

export default function Welcome( {navigation} ) {
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
      <Text h2 style={{ color: "white" }}>
        ¡Bienvenido!
      </Text>
      <Text h2 style={{ color: "white" }}>
        "Usuario"
      </Text>
      <View style={{ width: "70%", height: "100%", backgroundColor: "#6C0000", alignItems:"flex-start", flexDirection:"column-reverse", flex: 1}}>
        <Button
          title="Deslogearse"
          titleStyle={{ color: "white" }}
          buttonStyle={{ backgroundColor: "#6C0000" }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        </View>
        <View style={{ width: "70%", height: "80%", backgroundColor: "#6C0000", alignItems:"flex-end", flexDirection:"column", flex: 1 }}>
        <Button
          title="Continuar"
          titleStyle={{ color: "white" }}
          buttonStyle={{ backgroundColor: "#6C0000" }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    height: "100%",
    backgroundColor: "#6C0000",
    alignItems: "center",
    justifyContent: "center",
  },
});




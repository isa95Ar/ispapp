/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Text } from "react-native-elements";

function Welcome() {
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
      <View style={stylesButton.container}>
        <Button
          title="Deslogearse"
          titleStyle={{ color: "white" }}
          buttonStyle={{ backgroundColor: "#6C0000" }}
        />
        <Button
          title="Continuar"
          titleStyle={{ color: "white" }}
          buttonStyle={{ backgroundColor: "#6C0000" }}
        />
      </View>
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

const stylesButton = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C0000",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default Welcome;

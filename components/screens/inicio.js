/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri:
            "https://cdn.discordapp.com/attachments/757361195425726585/773705725788553226/InstitutoLogo.png"
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


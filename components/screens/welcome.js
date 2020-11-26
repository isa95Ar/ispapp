/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React from "react";
import { StyleSheet, View,ImageBackground } from "react-native";
import { Avatar, Button, Text } from "react-native-elements";
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({ navigation }) {
  const user = useSelector((state) => state.user);

  const loggedOut = async () => {
      const token = await AsyncStorage.getItem("session")
      if (token !== null){
        const token = await AsyncStorage.removeItem("session")
        navigation.navigate("Login");
      }
  }
  
  return (
    <ImageBackground source={require("../../assets/bg-app.png")} style={styles.container}>
      <View style={styles.containerHeader}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              "https://cdn.discordapp.com/attachments/757361195425726585/773705725788553226/InstitutoLogo.png"
          }}
        />
      </View>
      <View style={styles.containerBody}>
        <Text h1 style={{ color: "white",fontWeight: 'bold' }}>
          ¡Bienvenido!
        </Text>
        <Text h2 style={{ color: "white" }}>
          {user.name}
        </Text>
      </View>
      <View
        style={styles.containerFooter}
      >
        <Button
          title="Deslogearse"
          titleStyle={{ color: "white" }}
          buttonStyle={{ backgroundColor: "rgba(121, 1, 2, 0.1)" }}
          onPress={() => {
           loggedOut();
          }}
        />
        <Button
          title="Continuar"
          titleStyle={{ color: "white" }}
          buttonStyle={{ backgroundColor: "rgba(121, 1, 2, 0.1)" }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6C0000",
  },
  containerHeader: {
    flex: 3,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBody: {
    flex: 3,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerFooter : {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection :"row",
    alignContent : "center",
    alignItems:"center",
    justifyContent :"space-around",

  }
});

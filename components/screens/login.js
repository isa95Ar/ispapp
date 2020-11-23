/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector,useDispatch } from "react-redux";
import {updateUser} from '../../actions/user';


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("state vacio ",user);
  },[]);

  useEffect(() => {
    console.log("Nuevo State",user);
  },[user]);

  const login = async () => {
    try {
      const data = await fetch(
        "http://backend.institutopatagonico.edu.ar/api/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify({ email: email, password: password }),
        }
      );
     
      let response = await data.json();
  
      dispatch(updateUser(response.user))
    } catch (e) {
      console.log('error lol',e);
    }
    console.log(email,password,user.name)
    if(user.email == email){
      navigation.navigate("Welcome");
    }
  };


  return (
    <ImageBackground
      source={require("../../assets/bg-app.png")}
      style={styles.container}
    >
      <View style={styles.containerHeader}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              "https://cdn.discordapp.com/attachments/757361195425726585/773705725788553226/InstitutoLogo.png",
          }}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 35 }}>
          Iniciar Sesión
        </Text>
      </View>
      <View style={styles.containerInputs}>
        <Input
          placeholder="Usuario"
          placeholderTextColor="white"
          onChangeText={(value) => setEmail(value)}
          leftIcon={<Icon name="user" size={24} color="white" />}
        />
        <Input
          placeholder="Contraseña"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          leftIcon={<Icon name="lock" size={24} color="white" />}
        />
      </View>
      <View style={styles.containerButtons}>
        <Button
          title="Entrar"
          titleStyle={{ color: "#6C0000", paddingHorizontal: 80 }}
          buttonStyle={{ backgroundColor: "white" }}
          onPress={() => {login()
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C0000",
    height: "100%",
    width: "100%",
  },
  containerHeader: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    paddingTop: 50,
  },
  containerInputs: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  containerButtons: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

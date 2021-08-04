/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Text,Alert, } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector,useDispatch } from "react-redux";
import {updateUser} from '../../actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    checkSession();
  },[]);

  const checkSession = async () => {
    try {
      const token = await AsyncStorage.getItem("session");
      if(token !== null) {
        const data = await fetch(
          "http://backend.institutopatagonico.edu.ar/api/authenticateduser",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }, 
          }
        );
        let response = await data.json();
        if (response.status === undefined){
          dispatch(updateUser(response));
          navigation.navigate("Bienvenida");
        }else{
          Alert.alert('Error de Authentificacion','Tus credenciales son invalidas');
        }
      }
    } catch(e) {
      Alert.alert('Error de Authentificacion','Tus credenciales son invalidas');
    }
  }

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
      
      if (response.access_token !== undefined){
        await AsyncStorage.setItem("session", response.access_token);
        dispatch(updateUser(response.user));
        navigation.navigate("Bienvenida");
      }else{
        Alert.alert('Error de Authentificacion','Tus credenciales son invalidas');
      }
    } catch (e) {
      Alert.alert('Error de Authentificacion','Tus credenciales son invalidas');
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/bg-app.png")}
      style={styles.container}
    >
      <View style={styles.containerHeader}>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              "https://cdn.discordapp.com/attachments/757361195425726585/773705725788553226/InstitutoLogo.png",
          }}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
          Iniciar Sesión
        </Text>
      </View>
      <View style={styles.containerInputs}>
        <Input
          placeholder="Usuario"
          placeholderTextColor="white"
          inputStyle={{color: "#fff",fontSize:15,marginLeft:5}}
          onChangeText={(value) => setEmail(value)}
          leftIcon={<Icon name="user" size={20} color="white" />}
        />
        <Input
          placeholder="Contraseña"
          placeholderTextColor="white"
          inputStyle={{color: "#fff",fontSize:15,marginLeft:5}}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          leftIcon={<Icon name="lock" size={20} color="white" />}
        />
      </View>
      <View style={styles.containerButtons}>
        <Button
          title="Entrar"
          titleStyle={{ color: "#6C0000", paddingHorizontal: 80 }}
          buttonStyle={{ backgroundColor: "white" }}
          onPress={() => {login()}}
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
    paddingTop: 25,
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

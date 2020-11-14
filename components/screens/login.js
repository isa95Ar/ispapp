/* Author: Maximiliano Fiorito, Fecha: 21/10/2020, Institucion: ISP*/
import React,{useRef} from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login({ navigation }) {
 
  const input = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              "https://cdn.discordapp.com/attachments/757361195425726585/773705725788553226/InstitutoLogo.png",
          }}
        />
      </View>
      <View style={styles.containerInputs}>
        <Input
          
          placeholder="Usuario"
          placeholderTextColor="white"
          leftIcon={<Icon name="user" size={24} color="white" />}
        />
        <Input
          placeholder="Contraseña"
          placeholderTextColor="white"
          secureTextEntry={true}
          leftIcon={<Icon name="lock" size={24} color="white" />}
        />
      </View>
      <View style={styles.containerButtons}>
        <Button
          title="Entrar"
          titleStyle={{ color: "#6C0000" }}
          buttonStyle={{ backgroundColor: "white" }}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#6C0000",
    height: "100%",
    widht: "100%",
  },
  containerHeader: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    widht: "100%",
  },
  containerInputs : {
    flex:2,
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    height: "100%",
    widht: "100%",
  },
  containerButtons : {
    flex:2,
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    height: "100%",
    widht: "100%",
  }
});

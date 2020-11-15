import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";
import * as Linking from "expo-linking";

export default function CustomDrawerContent(props) {
  const name = "Gonza Verón";
  const title = "Pre-junior Developer";
  return (
    <DrawerContentScrollView {...props} style={styles.drawContent}>
      <ImageBackground
        source={require("../../assets/bg.jpeg")}
        imageStyle={{ opacity: 0.50 }}
        style={styles.headerBar}
      >
        <Text 
        style={{ color: "#fff",fontSize:20, fontWeight: "bold", opacity: 1,alignContent:"center",marginBottom:40,marginLeft:10 }}>
          {name}
        </Text>

        <Avatar
          rounded
          title="GV"
          size="medium"
          placeholderStyle={{backgroundColor: '#790102'}}
          source={require("../../assets/images/Papasito.png")}
          containerStyle={{marginBottom:10,marginRight:10}}
        />
      </ImageBackground>
      <View style={styles.bodyBar}>
        <DrawerItemList {...props} labelStyle={styles.drawItem} />
        <DrawerItem
          label="Aiuda"
          labelStyle={styles.drawItem}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/search?q=programaci%C3%B3n+para+novatos"
            )
          }
        />
        <DrawerItem
          label="Cerrar Sesión"
          labelStyle={styles.drawItem}
          onPress={() => console.log("sesión cerrada")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  
  drawItem: {
    color: "#fff",
    fontWeight: "bold",
  },
  headerBar: {
    width: "100%",
    height: "100%",
    flex: 2,
    flexDirection: "row",
    alignItems:"flex-end",
    justifyContent:"space-between",
    backgroundColor:"brown",
    marginBottom:10
  },
  bodyBar: {
    width: "100%",
    height: "100%",
    flex: 8,
    flexDirection: "column",
    backgroundColor: "brown",
  },
});

import React from "react";
import {ImageBackground, StyleSheet, View, Text} from "react-native";
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {Avatar} from 'react-native-elements';
import * as Linking from 'expo-linking';

export default function CustomDrawerContent(props) {
    const image = require("../../assets/images/Papasito.png");
    const name = "Gonza Verón";
    const title = "Pre-junior Developer";
    return (
        <DrawerContentScrollView {...props} style={styles.drawContent}>
            <ImageBackground
                    source={image}
                    imageStyle={{opacity:0.6}}
                    style={styles.imagebckgrnd}>
                <View style={styles.nombreTitulo}>
                    <View style={{flexDirection: "column", marginBottom: "5%"}}>
                        <Text style={{color: "#fff", fontWeight: "bold", opacity: 1}}>{name}</Text>
                        <Text style={{color: "#fff", fontWeight: "bold", opacity: 1}}>{title}</Text>
                    </View>
                    <Avatar
                        rounded
                        size="large"
                        source={{
                            uri: image}} />
                </View>
            </ImageBackground>
            <View style={{flex:1}}>
                <DrawerItemList {...props} labelStyle={styles.drawItem} />
                <DrawerItem
                    label="Aiuda"
                    labelStyle={styles.drawItem}
                    onPress={() => Linking.openURL('https://www.google.com/search?q=programaci%C3%B3n+para+novatos')} />
                <DrawerItem
                    label="Cerrar Sesión"
                    labelStyle={styles.drawItem}
                    onPress={() => console.log("sesión cerrada")} />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    nombreTitulo: {
        flex: 1,
        flexDirection: "row", 
        justifyContent: "flex-end", 
        alignItems: "flex-end",
    },
    imagebckgrnd: {
        flex: 4,
        width: "100%",
        height: "100%",
        position: 'relative',
        top: -5,
        left: 0,
    },
    drawContent: {
        backgroundColor: "brown",
        height: "100%",
    },
    drawItem: {
        color: "#fff",
        fontWeight: "bold",
    }
});
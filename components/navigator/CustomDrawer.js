import React from "react";
import {ImageBackground, StyleSheet, View, Text} from "react-native";
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {Avatar} from 'react-native-elements';
import * as Linking from 'expo-linking';

export default function CustomDrawerContent(props) {
    const image = require("../../assets/images/Papasito.png");
    const name = "Gonza Verón";
    const title = "Alto papasito";
    return (
        <DrawerContentScrollView {...props} style={styles.drawContent}>
            <View style={styles.container}>
                <ImageBackground
                        source={image}
                        style={styles.imagebckgrnd}>
                    <View style={styles.nombreTitulo}>
                        <View style={{flexDirection: "column"}}>
                            <Text style={{color: "#fff", fontWeight: "bold"}}>{name}</Text>
                            <Text style={{color: "#fff", fontWeight: "bold"}}>{title}</Text>
                        </View>
                        <Avatar
                            rounded
                            size="large"
                            source={{
                                uri: image}} />
                    </View>
                </ImageBackground>
            </View>
            <DrawerItemList {...props} labelStyle={styles.drawItem} />
            <DrawerItem
                label="Aiuda"
                labelStyle={styles.drawItem}
                onPress={() => Linking.openURL('https://www.google.com/search?q=programaci%C3%B3n+para+novatos')} />
            <DrawerItem
                label="Cerrar Sesión"
                labelStyle={styles.drawItem}
                onPress={() => console.log("sesión cerrada")} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 150,
        alignItems: "flex-end"
    },
    nombreTitulo: {
        flex: 1,
        flexDirection: "row", 
        justifyContent: "flex-end", 
        alignItems: "flex-end",
    },
    imagebckgrnd: {
        width: "100%",
        height: 150,
        position: 'relative',
        top: -5,
        left: 0,
        opacity: 1,
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
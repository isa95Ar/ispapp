import React from "react";
import {View, Text} from "react-native";
import HeaderBar from "./HeaderBar";

export default function DummyScreen({navigation}){
    return (
        <View>
            <HeaderBar nav={navigation}/>
            <Text> Soy una ventana lleeeena de info útil </Text>
        </View>
    )
};
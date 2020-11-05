import React, {useState} from "react";
import {Header, SearchBar} from "react-native-elements";
import {StyleSheet, Text} from "react-native";
import { View } from "react-native";



export default function HeaderBar(){
    return (
        <Header
            backgroundColor="brown"
            centerComponent={<Searcher />}
            centerContainerStyle={{flexGrow:5}}
            leftComponent={{ icon: "home", color: "#fff" }}
            rightComponent={{ icon: "menu", color: "#fff" }}
        />
    )}

    function Searcher(){
        const [search, setSearch] = useState("");
        return (
            <SearchBar
                containerStyle={styles.search}    
                inputStyle={{color:"#fff", alignSelf: "center"}}
                onChangeText={text => setSearch(text)}
                placeholder="Ingrese búsqueda..."
                placeholderTextColor="#fff"
                round
                value={search}
            />
        )
    }

    const styles = StyleSheet.create({
        search: {
            alignItems: "center",
            backgroundColor: "brown",
            borderBottomColor: "brown",
            borderTopColor: "brown",
            flex: 1,
            flexDirection: "row",
            flexGrow: 1,
        },
    });
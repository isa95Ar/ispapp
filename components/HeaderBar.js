import React, { useState } from "react";
import { Header, SearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function HeaderBar({ nav }) {
  return (
    <Header
      backgroundColor="#781713"
      centerContainerStyle={{ flexGrow: 5 }}
      leftComponent={{ icon: "home", color: "#F5F5F5" }}
      rightComponent={{
        icon: "menu",
        color: "#F5F5F5",
        onPress: () => nav.openDrawer(),
      }}
    />
  );
}

/*
    function Searcher(){
        const [search, setSearch] = useState("");
        return (
            <SearchBar
                containerStyle={styles.search}    
                inputStyle={{color:"#fff", alignSelf: "center"}}
                onChangeText={text => setSearch(text)}
                placeholderTextColor="#fff"
                round
                value={search}
            />
        )
    }
*/
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

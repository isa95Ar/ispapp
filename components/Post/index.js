import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ModalCard from "./ModalCard";

export default function Post( props ) {
  const [valor, setValor] = useState("Aviso");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
	const [modalVisible, setModalVisible] = useState(false);
	const [screenData, setScreenData] = useState({text: 'Texto texto descripción', title: 'Título', banner: ''});

  const apiCall = async () => {
    try {
      const token = await AsyncStorage.getItem("session");
      const data = await fetch(`http://backend.institutopatagonico.edu.ar/api/posts?page=${page}&type=${valor}`, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
      });
      let response = await data.json();
      setList(response);
    } catch (e) {
      console.log(e);
    }
  }
  const Pages = () => {
    if (page < 1) {
      setPage(1)
    }
  }

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    apiCall();
    setPage(1);
  }, [valor]);

  useEffect(() => {
    apiCall();
    Pages();
  }, [page]);

  return (

    <View>
      <SafeAreaView style={styles.containerSafeArea}>
        <ScrollView>
          <RNPickerSelect
            items={[
              { label: 'Consigna', value: 'Consigna' },
              { label: 'Tarea', value: 'Tarea' },
              { label: 'Aviso', value: 'Aviso' },
            ]}
            placeholder={{
              label: "Elija un tipo de Post",
              value: null,
            }}
            onValueChange={(value) => setValor(value)}
          />
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider pad={30}>
              <Avatar source={{ uri: l.banner }} size="small" style={styles.avatar} />
              <ListItem.Content >
                <ListItem.Title>{l.title}</ListItem.Title>
                <ListItem.Subtitle style={styles.ratingText}>
                  <Text style={{ color: "red" }}>{l.type}</Text>
                  <Text> en </Text>
                  <Text style={{ color: "red" }}>{l.career_id}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron 
								onPress={() => {
									setScreenData(l);
									props.nav.navigate('Detalle', l);
								}}
							/>
            </ListItem>
          ))}
          </ScrollView>
      </SafeAreaView>
          <View style={styles.buttons}>
            <Button
              onPress={() => setPage(page - 1)}
              title="Anterior Página"
            />
            <Button
              onPress={() => setPage(page + 1)}
              title="Siguiente Página"
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingText: {
    paddingLeft: 0,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerSafeArea: {
    height: "87%",
    width: "100%"
  }
});

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { Card, ListItem, Button, Icon, Badge } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {


  const user = useSelector((state) => state.user);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  const apiCall = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("session");
    try {

      const data = await fetch('https://backend.institutopatagonico.edu.ar/api/home', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': "Bearer " + token
        },
      });

      let response = await data.json();
      setInfo(response);
      console.log(response);
      //setList(response.posts);
      setLoading(false);

    } catch (e) {
      console.log(e);
      setLoading(false);
    }

  }

  /*Esta api no tira error ni nada, pero me crashea el expo, asi que no se que onda */

  useEffect(() => {
    apiCall();
  }, []);



  return (
    <View>
      {!loading ? <ScrollView>

        <Card>
          <Card.Title>Bienvenido {user.name}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: 'https://vinculotic.com/wp-content/uploads/2020/04/buenos-habitos-estudiantes-linea-01.jpg' }}>
          </Card.Image>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Aqui podras ver las ultimas actualizaciones de los docentes de {info.career ? info.career.name : ''}{` `}
            y eventos de la institución.
          </Text>
        </Card>

        <Card>
          <Card.Title>Novedades de {info.career ? info.career.name : ''}</Card.Title>
          <Card.Divider />
          <View>
            <Text>Publicaciones <Badge value={info.posts} status="primary" /> </Text>
          </View>
          <Card.Divider />
          <View>
            <Text>Eventos <Badge value={info.calendars} status="warning" /></Text>
          </View>
        </Card>
      </ScrollView>
        : <View style={{flex:1,justifyContent:'center',marginTop:'40%'}}><ActivityIndicator size="large" color="#0000ff" /></View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ratingText: {
    paddingLeft: 0,
  },
  avatar: {
    width: 60,
    height: 60,
  },
});
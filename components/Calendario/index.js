import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react"
import { FlatGrid, SectionGrid } from 'react-native-super-grid';;

export default function Calendar() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    calendarApi();
  }, []);

  const calendarApi = async () => {
    try {
      const data = await fetch('http://backend.institutopatagonico.edu.ar/api/calendars', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iYWNrZW5kLmluc3RpdHV0b3BhdGFnb25pY28uZWR1LmFyXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjA1NjU0ODAzLCJleHAiOjE2MzY3OTQ4MDMsIm5iZiI6MTYwNTY1NDgwMywianRpIjoiS2tMcjhMT25jdU1rYUdjQiIsInN1YiI6MTIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.1axegnJrk4QpQqp1wHUmYVIGSTUta1Zg5y3M1acWJMI"
        },
      });
      let response = await data.json();
      const dataComponent = []
      response.data.map((item) => {
        const Objeto = {
          id: item.id,
          date: item.date,
          materia: "",
          name: item.type,
          codeColor: "Red"
        }
        dataComponent.push(Objeto);
        setInfo(dataComponent);
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>

      <FlatGrid
        itemDimension={130}
        data={info}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View key={item.id} style={[styles.itemContainer, { backgroundColor: item.codeColor }]}>
            <Text style={styles.itemName}>{item.date}-                      -
            {item.name}</Text>
          </View>
        )}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 125,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5

  },
  itemCode: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  itemDate: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
});



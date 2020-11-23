import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";


export default function Post() {
  const apiCall = async () => {

    try{

      const data = await fetch('http://backend.institutopatagonico.edu.ar/api/posts',{
         method: 'GET',
         headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iYWNrZW5kLmluc3RpdHV0b3BhdGFnb25pY28uZWR1LmFyXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjA1NjU0ODAzLCJleHAiOjE2MzY3OTQ4MDMsIm5iZiI6MTYwNTY1NDgwMywianRpIjoiS2tMcjhMT25jdU1rYUdjQiIsInN1YiI6MTIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.1axegnJrk4QpQqp1wHUmYVIGSTUta1Zg5y3M1acWJMI"
        }, 
      });

      let response = await data.json();
      
      setList(response.data);

    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
       apiCall();
  },[]);
  
  const [lists,setList] = useState([1]);

  const list = [
    {
      title: 'Tarea para el martes',
      banner: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      type: 'Tarea',
      career_id: 'Laboratorio',
    },
    {
      title: 'Chris Jackson',
      banner: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      type: 'Vice Chairman',
      career_id: '',
    },
  ]

  return (
    <View>
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
            <ListItem.Subtitle></ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
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

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function Post() {
 
  const list = [
    {
      title: "Tarea para hacer",
      banner:
        "https://cdn.discordapp.com/attachments/768624853556133910/773700199985446932/unknown.png",
      type: "Tarea",
      subject: "Laboratorio 1",
      date: " 28 de Octubre 2021",
    },
    {
      title: "Evento choripaneada",
      banner:
        "https://cdn.discordapp.com/attachments/768624853556133910/773700160781549608/unknown.png",
      type: "Evento",
      subject: "Practica Profesionalizante",
      date: "28 de octubre 2021",
    },
  ];

  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider pad={30}>
          <Avatar
          source={{ uri:  "https://cdn.discordapp.com/attachments/768624853556133910/773700160781549608/unknown.png" }} size="small" style={styles.avatar} />
          <ListItem.Content >
            <ListItem.Title>{l.title}</ListItem.Title>
            <ListItem.Subtitle style={styles.ratingText}>
              <Text style={{ color: "red" }}>{l.type}</Text>
              <Text> en </Text>
              <Text style={{ color: "red" }}>{l.subject}</Text>
            </ListItem.Subtitle>
            <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
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

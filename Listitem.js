import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

/*Hay que hacer un template (faltan codigo de otras partes)
ver de donde saco la info para las cosas
agregar fecha de creacion a el objeto
if remove
checkear la imagen para los tags
coble checkear todo
*/
export default function App() {
  var Nombre= "aaaaa"
  var Variable= '?'
  
  const list = [
  {
    title: 'Tarea hacer esto',
    avatar_url: "https://cdn.discordapp.com/attachments/768624853556133910/773700199985446932/unknown.png",
    tags: 'Vice President',
    date: 'aa'
  },
  {
    title: 'Evento choripaneada',
    avatar_url: 'https://cdn.discordapp.com/attachments/768624853556133910/773700160781549608/unknown.png',
    tags: Variable + ' En ' + Nombre,
    date: 'Date'
  },
]
  return (
    <View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: "https://cdn.discordapp.com/attachments/768624853556133910/773700160781549608/unknown.png"}} />
        <ListItem.Content>
          <ListItem.Title>{l.title}</ListItem.Title>
          <ListItem.Subtitle>{l.tags}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
    </View>
  );
}

class post {
  constuctor() {
    this.titulo = '';
    this.url = '';
    this.tag1 = '';
    this.tag2 = '';
    this.fecha = '';
  }
};
const agregar = ()  =>{
  PostNuevo = new post();
  list.push(PostNuevo);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

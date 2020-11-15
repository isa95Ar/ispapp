import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

import { FlatGrid, SectionGrid } from 'react-native-super-grid';;

export default function Calendar() {
    
  const [items, setItems] = React.useState([
    { date:'22-02 19hs', materia:'DS', name: 'FINAL', codeColor: '#4169E1',id:1 },
    { date:'24-02 18hs', materia:'AOC', name: 'FINAL', codeColor: '#FFD700',id:2 },
    { date:'01-03 17hs', materia:'PP', name: 'PARCIAL', codeColor: '#9ACD32',id:3 },
    { date:'02-03 17hs', materia:'BD1', name: 'PARCIAL', codeColor: '#DC143C',id:4 },
    { date:'04-03 19hs', materia:'PP', name: 'FINAL', codeColor: '#9ACD32',id:5  },
    { date:'06-03 19hs', materia:'DS', name: 'TALLER', codeColor: '#4169E1',id:6  },
    { date:'12-03 20hs', materia:'PP', name: 'REUNION', codeColor: '#9ACD32' ,id:7 },
    { date:'24-03 19hs', materia:'BD1', name: 'PARCIAL', codeColor: '#DC143C',id:8  },
    { date:'03-04 19hs', materia:'DS', name: 'FINAL', codeColor: '#4169E1',id:9  },
    { date:'07-04 18hs', materia:'AOC', name: 'FINAL', codeColor: '#FFD700' ,id:10 },
    { date:'12-04 20hs', materia:'PP', name: 'REUNION', codeColor: '#9ACD32',id:11  },
    { date:'21-04 18hs', materia:'BD1', name: 'FINAL', codeColor: '#DC143C',id:12  },
    { date:'09-05 22hs', materia:'DS', name: 'PARCIAL', codeColor: '#4169E1',id:13  },
    { date:'10-05 20hs', materia:'BD1', name: 'PARCIAL', codeColor: '#DC143C',id:14  },
    { date:'25-05 17hs', materia:'PP', name: 'FINAL', codeColor: '#9ACD32',id:15  },
    { date:'06-06 18hs', materia:'DS', name: 'FINAL', codeColor: '#4169E1',id:16  },
    { date:'01-07 19hs', materia:'AOC', name: 'FINAL', codeColor: '#FFD700',id:17  },
    { date:'03-07 19hs', materia:'PP', name: 'FINAL', codeColor: '#9ACD32',id:18  },
    { date:'06-07 18hs', materia:'BD', name: 'FINAL', codeColor: '#DC143C' ,id:19 },
  ]);

  return (
    <ScrollView>
    
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View key={item.id} style={[styles.itemContainer, { backgroundColor: item.codeColor }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.materia}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </View>
        )}
      />
      <View>
        <Image
          source ={{ uri: "https://i.ibb.co/CKY7m5X/awesome.png" }}
          style={{width:400, height: 400, backgroundColor:'#ECECEC'}}
        />
      </View>

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
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
    
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  itemDate: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
});



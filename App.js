/* Autor Franco 21/10/20 Instituto Superior Patagonico */
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Accesory } from "react-native-elements";
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

/*export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source= {{
          uri: 'https://scontent.fnqn2-1.fna.fbcdn.net/v/t1.0-9/58641557_3051203668238115_6615079470766227456_n.png?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=1M_h0ydzDfcAX_MY4nP&_nc_ht=scontent.fnqn2-1.fna&oh=50e31e43e07f3486be640872c895283b&oe=5FBF0CA0'
        }}
        activeOpacity={0.7}
        containerStyle={styles.avatar}
        titleStyle={styles.icon}
      />

    <Text h1>Bievenidos</Text>


<Input
  placeholder='Usuario/User'
  leftIcon={
    <Icon
      size="small"
      name='user'
      size={24}
      color='black'

    />
  }
/>
<Input placeholder="Password" secureTextEntry={true} 
leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>

<Button
  title="Ingresar"
  color='red'
/>
    </View>
  );
}
*/ 

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Noticias</Text>
      <Button
        title="Saber mas"
        onPress={() => navigation.navigate('Details')}

        />
        
  
    </View>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Detalles de configuracion</Text>
      <Button
        title="Configuracion"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Tareas({ navigation }) {
  return (
     <View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
    <Text> Detalles de las tareas</Text>
    <Button
       title="Tareas"
       onPress={() => navigation.navigate('Homeworks')}
    />
 <div class="list-group">
  <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
  <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Library</a>
  <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Applications</a>
  <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Settings</a>
</div>
  </View>
  );
}

function Notificaciones({ navigation }) {
  return (
    <View style={{flex : 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
    <Text> Aca se muestran las notificaciones</Text>
    <Button
    title="Notificaciones"
    onPress={() => navigation.navigate('Homeworks')}
    />

    </View>
  )
}


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Menu') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
  
            } else if (route.name === 'Tareas') {
              return (
                <Ionicons
                name="copy-outline"
                size={size}
                color={color}
                />
              );
            } else if (route.name === 'Notificaciones') {
              return (
                <Ionicons
                name= 'chatbubble-ellipses-outline'
                size={size}
                color={color}
                />
              )
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Publicaciones" component={HomeScreen} />
        <Tab.Screen name="Calendario" component={SettingsScreen} />
        <Tab.Screen name="Tareas" component={Tareas} />
        <Tab.Screen name="Notificaciones" component={Notificaciones} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C0000',
    alignItems: "center",
    justifyContent: "center",
  },
  avatar:{
    backgroundColor:"white"
  },
  icon:{
    color:"white"
  },
  button:{
  backgroundColor:"red",
  }
  
});

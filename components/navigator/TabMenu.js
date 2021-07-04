import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HeaderBar from "../HeaderBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calendario from '../Calendario';
import Home from '../Home/Home';

function Homes({ navigation }) {
  return (
    <View>
      <HeaderBar nav={navigation} />
       <Home />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View>
      <HeaderBar nav={navigation} />
      <Text>Detalles de configuracion</Text>
    </View>
  );
}

function Calendar({ navigation }) {
  return (
    <View>
      <HeaderBar nav={navigation} />
      <Calendario />
    </View>
  );
}



const Tab = createMaterialBottomTabNavigator();

export default function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Publicaciones"
      activeColor="#D6D6D6"
      inactiveColor="#500000"
      barStyle={{ backgroundColor: "#781713" }}
    >
      <Tab.Screen
        name="Home"
        component={Homes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Posts}
        options={{
          tabBarLabel: 'Publicaciones',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name= 'dashboard' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='event' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

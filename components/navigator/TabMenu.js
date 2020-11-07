import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HeaderBar from "../HeaderBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Post from '../Post';

function Posts({ navigation }) {
  return (
    <View>
      <HeaderBar nav={navigation} />
       <Post />
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
      <Text> Detalles de las tareas</Text>
    </View>
  );
}



const Tab = createMaterialBottomTabNavigator();

export default function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Publicaciones"
      activeColor="#f0edf6"
      inactiveColor="gray-light"
      barStyle={{ backgroundColor: "brown" }}
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import PublicacionesScreen from "./components/dummyScreen";
import TabMenu from './components/navigator/TabMenu';
import Login from './components/screens/login';
import Welcome from './components/screens/welcome';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <Drawer.Navigator
                backBehavior="history"
                drawerPosition="right"
                initialRouteName="Login">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Welcome" component={Welcome} />
                <Drawer.Screen name="Home" component={TabMenu} />
                {/*<Drawer.Screen name="Calendario" component={CalendarioScreen} />
                <Drawer.Screen name="Tareas" component={TareasScreen} />
                <Drawer.Screen name="Notificaciones" component={NotificacionesScreen} />*/}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




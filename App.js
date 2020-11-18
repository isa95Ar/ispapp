import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabMenu from "./components/navigator/TabMenu";
import CustomDrawer from "./components/navigator/CustomDrawer";
import Login from "./components/screens/login";
import Welcome from "./components/screens/welcome";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore } from "redux";

const Drawer = createDrawerNavigator();

export default function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          backBehavior="history"
          drawerPosition="right"
          initialRouteName="Login"
          drawerContent={CustomDrawer}
          drawerContentOptions={{
            activeTintColor: "#F57273",
            contentContainerStyle: {
              height: "100%",
              width: "100%",
              backgroundColor: "brown",
            },
          }}
        >
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Home"
            component={TabMenu}
            options={{ headerShown: false }}
          />
          {/*<Drawer.Screen name="Calendario" component={CalendarioScreen} />
                <Drawer.Screen name="Tareas" component={TareasScreen} />
                <Drawer.Screen name="Notificaciones" component={NotificacionesScreen} />*/}
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  NavigationContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

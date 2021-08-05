import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabMenu from "./components/navigator/TabMenu";
import CustomDrawerContent from "./components/navigator/CustomDrawer";
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
          drawerContent={props => <CustomDrawerContent {...props} />}
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
            name="Bienvenida"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Home"
            component={TabMenu}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
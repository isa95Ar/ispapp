import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawerContent(props) {

	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const loggedOut = async () => {
		await AsyncStorage.removeItem("session")
		props.navigation.navigate("Login");
		dispatch(logout());
	}

	const {state, ...rest} = props;
	const newState = {...state};
	newState.routes = newState.routes.filter(item => !['Bienvenida', 'Login', 'Detalle' ].includes(item.name));

	return (
		<DrawerContentScrollView {...props} style={styles.drawContent}>
			<ImageBackground
				source={require("../../assets/bg.jpeg")}
				imageStyle={{ opacity: 0.50 }}
				style={styles.headerBar}
			>
				<Text
					style={{ color: "#fff", fontSize: 20, fontWeight: "bold", opacity: 1, alignContent: "center", marginBottom: 40, marginLeft: 10 }}>
					{user.name}
				</Text>

				<Avatar
					rounded
					size="medium"
					placeholderStyle={{ backgroundColor: '#790102' }}
					source={{ uri: `https://ui-avatars.com/api/?name=${user.name}` }}
					containerStyle={{ marginBottom: 10, marginRight: 10 }}
				/>
			</ImageBackground>
			<View style={styles.bodyBar}>
				<DrawerItemList state={newState}{...rest} labelStyle={styles.drawItem} />
				<DrawerItem
					label="Cerrar Sesión"
					labelStyle={styles.drawItem}
					onPress={() => loggedOut()}
				/>
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({

	drawItem: {
		color: "#fff",
		fontWeight: "bold",
	},
	headerBar: {
		width: "100%",
		height: "100%",
		flex: 2,
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
		backgroundColor: "brown",
		marginBottom: 10
	},
	bodyBar: {
		width: "100%",
		height: "100%",
		flex: 8,
		flexDirection: "column",
		backgroundColor: "brown",
	},
});

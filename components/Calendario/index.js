import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react"
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Calendar() {

	const [info, setInfo] = useState([]);

	useEffect(() => {
		calendarApi();
	}, []);

	const calendarApi = async () => {
		try {
			const session = await AsyncStorage.getItem("session");
			const data = await fetch('http://backend.institutopatagonico.edu.ar/api/calendars', {
				method: 'GET',
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					'Authorization': `Bearer ${session}`
				},
			});
			let response = await data.json();
			const dataComponent = [];
			response.map((item) => {
				const Objeto = {
					id: item.id,
					date: item.date,
					title: item.title,
				}
				dataComponent.push(Objeto);
				
			})
      setInfo(dataComponent);
		} catch (error) {
			console.log(error);
		}
	}

	const colorAleatorio = () => {
		const paleta = ['cadetblue', 'coral', 'gainsboro', 'lightgreen', 'darkorange', 'tomato', 'peru'];
		const indice =	Math.floor(Math.random() * (paleta.length));
		return paleta[indice];
	}

	return (
		<FlatGrid
				itemDimension={130}
				data={info}
				style={styles.gridView}
				spacing={10}
				renderItem={({ item }) => (
					<View key={item.id} style={[styles.itemContainer, {backgroundColor: colorAleatorio()}]}>
						<Text style={styles.itemName}>{item.title}</Text>
						<Text style={styles.itemDate}>{item.date}</Text>
					</View>
				)}
			/>
	);
}

const styles = StyleSheet.create({
	gridView: {
		backgroundColor: '#ECECEC',
		minHeight: '100%',
	},
	itemContainer: {
		justifyContent: 'flex-end',
		borderRadius: 5,
		padding: 10,
		height: 150,
	},
	itemName: {
		fontSize: 20,
		color: 'white',
		fontWeight: '600',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 5
	},
	itemDate: {
		fontWeight: '600',
		fontSize: 12,
		color: '#fff',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 5
	},
});



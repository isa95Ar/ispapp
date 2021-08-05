import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function DetalleScreen(props) {

	return (
		<View>
			<Card containerStyle={{top: '20%', height: '80%'}} >
				<Card.Title> {props.route.params.title} </Card.Title>
				<Card.Divider />
				<Card.Image source={ {uri: props.route.params.banner} } />
				<Text> {props.route.params.text} </Text>
			</Card>
		</View>
	)
}
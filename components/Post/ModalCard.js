import React from 'react';
import { View } from 'react-native';
import { Modal, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

export default function ModalCard( props ){
	
	return(
		<Modal 
			animationType='fade'
			onRequestClose={ () => {
				props.setVisible(false);
			}}
			transparent={true}
			visible={props.visible}
		>
			<Card containerStyle={{flex: 0.6, top: '20%'}} >
				<Card.Title> { props.data.title } </Card.Title>
				<View style={{position: 'absolute', left: '90%', top: -15}}>
					<Button
						title=""
						type="clear"
						icon={
							<Icon
								name='cross'
								type='entypo'
							/>
						}
						onPress={() => {props.setVisible(false)}}
					/>
				</View>
				<Card.Divider />
				<Card.Image source={{ uri: props.data.banner }} />
				<Text> { props.data.text } </Text>
			</Card>
		</Modal>
	)
}
import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';

import {
	Container,
	Banner,
	Info,
	Data,
	Title,
	Date,
	Location,
	Provider,
} from './styles';

export default function Meetup() {
	function handleSubmit() {
		console.tron.log('Whoah nice button');
	}

	return (
		<Container>
			<Banner
				source={{ uri: 'https://api.adorable.io/avatar/200/renan.png' }}
			/>

			<Info>
				<View>
					<Title>Meetup de React Native</Title>
				</View>
				<Data>
					<Icon name="event" size={20} color="#333" />
					<Date>24 de Junho, ás 20h</Date>
				</Data>
				<Data>
					<Icon name="place" size={20} color="#333" />
					<Location>Rua Guilherme Gembala, 260</Location>
				</Data>
				<Data>
					<Icon name="person" size={20} color="#333" />
					<Provider>Diego Fernandes</Provider>
				</Data>

				<Button onPress={handleSubmit}>Realizar inscrição</Button>
			</Info>
		</Container>
	);
}

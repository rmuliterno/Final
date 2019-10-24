import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Meetups() {
	return (
		<Background>
			<Container>
				<Title>Meetups</Title>

				<List
					data={data}
					keyExtractor={item => String(item)}
					renderItem={({ item }) => <Meetup data={item} />}
				/>
			</Container>
		</Background>
	);
}

Meetups.navigationOptions = {
	tabBarLabel: 'Meetups',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="format-list-bulleted" size={20} color={tintColor} />
	),
};

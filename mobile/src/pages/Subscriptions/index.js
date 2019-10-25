import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Subscription from '~/components/Subscription';

import { Container, Title, List } from './styles';

export default function Subscriptions() {
	const [subscriptions, setSubscriptions] = useState([]);

	useEffect(() => {
		async function loadSubscriptions() {
			const response = await api.get('subscriptions');

			setSubscriptions(response.data);
		}
		loadSubscriptions();
	}, []);

	async function handleCancel(id) {
		await api.delete(`subscriptions/${id}`);

		Alert.alert('Sucesso', 'Você cancelou sua inscrição na meetup!');
	}

	return (
		<Background>
			<Container>
				<Title>Subscriptions</Title>

				<List
					data={subscriptions}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => (
						<Subscription
							onCancel={() => handleCancel(item.id)}
							data={item}
						/>
					)}
				/>
			</Container>
		</Background>
	);
}

Subscriptions.navigationOptions = {
	tabBarLabel: 'Subscriptions',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="local-offer" size={20} color={tintColor} />
	),
};

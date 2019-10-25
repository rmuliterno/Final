import React, { useEffect, useState } from 'react';
import { Alert, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo.png';
import api from '~/services/api';

import Background from '~/components/Background';
import Subscription from '~/components/Subscription';

import { Header, Container, List } from './styles';

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

	StatusBar.setHidden(true, 'none');

	return (
		<Background>
			<Header>
				<Image source={logo} />
			</Header>
			<Container>
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
	tabBarLabel: 'Inscrições',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="local-offer" size={20} color={tintColor} />
	),
};

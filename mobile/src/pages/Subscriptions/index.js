import React, { useEffect, useState } from 'react';
import { Alert, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import logo from '~/assets/logo.png';
import api from '~/services/api';

import Background from '~/components/Background';
import Subscription from '~/components/Subscription';

import { Header, Container, List } from './styles';

const data = [0];

function Subscriptions({ isFocused }) {
	const [subscriptions, setSubscriptions] = useState([]);

	async function loadSubscriptions() {
		const response = await api.get('subscriptions');

		setSubscriptions(response.data);
	}

	useEffect(() => {
		if (isFocused) {
			loadSubscriptions();
		}
	}, [isFocused]);

	async function handleCancel(id) {
		await api.delete(`subscriptions/${id}`);

		Alert.alert('Sucesso', 'Você cancelou sua inscrição na meetup!');

		loadSubscriptions();
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

export default withNavigationFocus(Subscriptions);

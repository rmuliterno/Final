import React, { useEffect, useState, useMemo } from 'react';
import { Alert, Image, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import logo from '~/assets/logo.png';
import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Header, Container, List, Dia, Top } from './styles';

export default function Meetups() {
	const [meetups, setMeetups] = useState([]);
	const [date, setDate] = useState(new Date());

	const dateFormatted = useMemo(
		() => format(date, "d 'de' MMMM", { locale: pt }),
		[date],
	);

	function handlePrevDay() {
		setDate(subDays(date, 1));
	}

	function handleNextDay() {
		setDate(addDays(date, 1));
	}

	useEffect(() => {
		async function loadMeetups() {
			const response = await api.get('meetup', {
				params: { date },
			});

			setMeetups(response.data);
		}
		loadMeetups();
	}, [date]);

	async function handleSubscribe(id) {
		await api.post(`subscriptions/${id}`);

		Alert.alert('Sucesso', 'Você se inscreveu na meetup!');
	}

	StatusBar.setHidden(true, 'none');

	return (
		<Background>
			<Header>
				<Image source={logo} />
			</Header>
			<Container>
				<Top>
					<TouchableOpacity onPress={handlePrevDay}>
						<Icon name="chevron-left" size={40} color="#fff" />
					</TouchableOpacity>
					<Dia>{dateFormatted}</Dia>
					<TouchableOpacity onPress={handleNextDay}>
						<Icon name="chevron-right" size={40} color="#fff" />
					</TouchableOpacity>
				</Top>
				<List
					data={meetups}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => (
						<Meetup
							onSubscribe={() => handleSubscribe(item.id)}
							data={item}
						/>
					)}
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

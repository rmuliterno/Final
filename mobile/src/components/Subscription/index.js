import React from 'react';
import { View } from 'react-native';

import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { format } from 'date-fns-tz';

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

export default function Subscription({ data, onCancel }) {
	function dateFormat(date) {
		const dateFormatted = format(
			parseISO(date),
			"d 'de' MMMM', às' HH'h'",
			{
				timeZone: 'America/Sao_Paulo',
				locale: pt,
			},
		);

		return dateFormatted;
	}

	return (
		<Container>
			<Banner
				source={{
					uri: data.meetup.banner.url
						? data.meetup.banner.url
						: `https://api.adorable.io/avatar/400/${data.meetup.provider.name}.png`,
				}}
			/>

			<Info>
				<View>
					<Title>{data.meetup.title}</Title>
				</View>
				<Data>
					<Icon name="event" size={20} color="#333" />
					<Date>{dateFormat(data.meetup.date)}</Date>
				</Data>
				<Data>
					<Icon name="place" size={20} color="#333" />
					<Location>{data.meetup.location}</Location>
				</Data>
				<Data>
					<Icon name="person" size={20} color="#333" />
					<Provider>{data.meetup.provider.name}</Provider>
				</Data>

				<Button onPress={onCancel}>Cancelar inscrição</Button>
			</Info>
		</Container>
	);
}

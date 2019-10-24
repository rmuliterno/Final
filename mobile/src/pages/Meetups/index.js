import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Meetups() {
	return <Background />;
}

Meetups.navigationOptions = {
	tabBarLabel: 'Meetups',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="format-list" size={20} color={tintColor} />
	),
};

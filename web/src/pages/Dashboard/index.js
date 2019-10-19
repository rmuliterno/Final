import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
	api.get('meetups');

	return <h1>Alooo</h1>;
}

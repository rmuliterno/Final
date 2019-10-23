import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
	createMeetupSuccess,
	updateMeetupSuccess,
	createMeetupFailure,
	updateMeetupFailure,
} from './actions';

export function* create({ payload }) {
	try {
		const {
			provider_id,
			banner_id,
			title,
			description,
			date,
			location,
		} = payload;

		const response = yield call(api.post, 'meetups', {
			provider_id,
			banner_id,
			title,
			description,
			date,
			location,
		});

		const meetup = response.data;

		yield put(createMeetupSuccess(meetup));

		// history.push('/dashboard');
	} catch (err) {
		Alert.alert('Erro', 'Falha na criação do Meetup, verifique os dados');
		yield put(createMeetupFailure());
	}
}

export function* update({ payload }) {
	try {
		const {
			id,
			title,
			description,
			banner_id,
			date,
			location,
			provider_id,
		} = payload;

		const response = yield call(api.put, `meetups/${id}`, {
			title,
			description,
			banner_id,
			date,
			location,
			provider_id,
		});

		const meetup = response.data;

		yield put(updateMeetupSuccess(meetup));

		Alert.alert('Sucesso', 'Meetup atualizada com sucesso');

		// history.push('/');
	} catch (err) {
		Alert.alert(
			'Erro',
			'Falha na Atualização do Meetup, verifique os dados',
		);

		yield put(updateMeetupFailure());
	}
}

export default all([
	takeLatest('@meetup/CREATE_MEETUP_REQUEST', create),
	takeLatest('@meetup/UPDATE_MEETUP_REQUEST', update),
]);

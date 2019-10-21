import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
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
			title,
			description,
			banner_id,
			date,
			location,
			provider_id,
		} = payload;

		const response = yield call(api.post, 'sessions', {
			title,
			description,
			banner_id,
			date,
			location,
			provider_id,
		});

		const { meetup } = response.data;

		yield put(createMeetupSuccess(meetup));

		history.push('/dashboard');
	} catch (err) {
		toast.error('Falha na autenticação');
		yield put(createMeetupFailure());
	}
}

export function* update({ payload }) {
	try {
		const {
			title,
			description,
			banner_id,
			date,
			location,
			provider_id,
		} = payload;

		const response = yield call(api.post, 'users', {
			title,
			description,
			banner_id,
			date,
			location,
			provider_id,
		});

		const { meetup } = response.data;

		yield put(updateMeetupSuccess(meetup));

		history.push('/');
	} catch (err) {
		toast.error('Falha no cadastro');

		yield put(updateMeetupFailure());
	}
}

export default all([
	takeLatest('@meetup/CREATE_MEETUP_REQUEST', create),
	takeLatest('@meetup/UPDATE_MEETUP_REQUEST', update),
]);

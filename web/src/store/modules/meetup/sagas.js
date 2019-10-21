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
		const { email, password } = payload;

		const response = yield call(api.post, 'sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		if (!user.provider) {
			toast.error('Usuário não é prestador');
			return;
		}

		api.defaults.headers.Authorization = `Bearer ${token}`;

		yield put(signInSuccess(token, user));

		history.push('/dashboard');
	} catch (err) {
		toast.error('Falha na autenticação');
		yield put(signFailure());
	}
}

export function* update({ payload }) {
	try {
		const { name, email, password } = payload;

		yield call(api.post, 'users', {
			name,
			email,
			password,
			provider: true,
		});

		history.push('/');
	} catch (err) {
		toast.error('Falha no cadastro');

		yield put(signFailure());
	}
}

export function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export default all([
	takeLatest('@meetup/CREATE_MEETUP_REQUEST', create),
	takeLatest('@meetup/UPDATE_MEETUP_REQUEST', update),
]);

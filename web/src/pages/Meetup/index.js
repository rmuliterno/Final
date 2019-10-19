import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import BannerInput from './BannerInput';

import { Container } from './styles';

export default function Profile() {
	const dispatch = useDispatch();
	const profile = useSelector(state => state.user.profile);

	function handleSubmit(data) {
		dispatch(updateProfileRequest(data));
	}

	return (
		<Container>
			<Form initialData={profile} onSubmit={handleSubmit}>
				<BannerInput name="banner_id" />
				<Input name="title" placeholder="Título do Meetup" />
				<Input
					multiline
					name="description"
					placeholder="Descrição completa"
				/>
				<Input name="date" placeholder="Data do Meetup" />
				<Input name="location" placeholder="Localização" />

				<button type="submit">Salvar Meetup</button>
			</Form>
		</Container>
	);
}

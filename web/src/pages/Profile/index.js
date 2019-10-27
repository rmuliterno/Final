import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
	name: Yup.string(),
	email: Yup.string().email(),
	oldPassword: Yup.string(),
	password: Yup.string().when('oldPassword', (oldPassword, field) =>
		oldPassword ? field.required().min(6) : field
	),
	passwordConfirm: Yup.string().when('password', (password, field) =>
		password ? field.required().oneOf([Yup.ref('password')]) : field
	),
});

export default function Profile() {
	const dispatch = useDispatch();
	const profile = useSelector(state => state.user.profile);

	function handleSubmit(data) {
		dispatch(updateProfileRequest(data));
	}

	return (
		<Container>
			<Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
				<Input
					name="name"
					autoComplete="off"
					placeholder="Nome completo"
				/>
				<Input
					name="email"
					autoComplete="off"
					placeholder="Seu endereço de e-mail"
				/>

				<hr />

				<Input
					type="password"
					name="oldPassword"
					placeholder="Senha atual"
				/>
				<Input
					type="password"
					name="password"
					placeholder="Nova senha"
				/>
				<Input
					type="password"
					name="confirmPassword"
					placeholder="Confirmação de senha"
				/>

				<button type="submit">Salvar perfil</button>
			</Form>
		</Container>
	);
}

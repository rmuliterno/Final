import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DateInput from './DateInput';

import { Container } from './styles';

export default function Meetup() {
	function handleSubmit({ banner_id, title, description, date, location }) {
		console.log(banner_id, title, description, date, location);
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<BannerInput name="banner_id" />
				<Input name="title" placeholder="Título do Meetup" />
				<Input
					multiline
					name="description"
					placeholder="Descrição completa"
				/>
				<DateInput className="date" name="date" autocomplete="off" />
				<Input name="location" placeholder="Localização" />

				<button className="save" type="submit">
					Salvar Meetup
				</button>
			</Form>
		</Container>
	);
}

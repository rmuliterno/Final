import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { format } from 'date-fns-tz';
import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup, Top, Banner, Info } from './styles';

export default function Dashboard() {
	const pageURL = window.location.href;
	const meetup_id = pageURL.substr(pageURL.lastIndexOf('/') + 1);

	const [meetup, setMeetup] = useState([]);
	const [banner, setBanner] = useState([]);

	useEffect(() => {
		async function loadBanner() {
			const response = await api.get(`schedule/${meetup_id}`);

			const { data } = response;

			setBanner(data.banner);
		}

		loadBanner();
	}, [meetup_id]);

	useEffect(() => {
		async function loadMeetup() {
			const response = await api.get(`schedule/${meetup_id}`);

			const { data } = response;

			const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

			const dateFormatted = format(
				parseISO(data.date),
				"d 'de' MMMM', às' HH'h'",
				{
					timeZone: timezone,
					locale: pt,
				}
			);

			data.date = dateFormatted;

			setMeetup(data);
		}

		loadMeetup();
	}, [meetup.date, meetup_id]);

	async function handleCancel() {
		console.log('deletando');
		await api.delete(`meetups/${meetup_id}`);

		history.push('/');
	}

	return (
		<Container>
			<Meetup>
				<Top>
					<strong>{meetup.title}</strong>
					<div>
						<Link to={`/meetup/${meetup_id}`}>
							<button className="editar" type="button">
								<MdEdit size={27} color="#fff" />
								<strong>Editar</strong>
							</button>
						</Link>
						<button
							onClick={handleCancel}
							className="deletar"
							type="button"
						>
							<MdDeleteForever size={27} color="#fff" />
							<strong>Cancelar</strong>
						</button>
					</div>
				</Top>
				<Banner>
					<img src={banner.url} alt={meetup.title} />
				</Banner>
				<p>{meetup.description}</p>
				<Info>
					<MdEvent size={27} color="#fff" />
					<strong className="date">{meetup.date}</strong>
					<MdPlace size={27} color="#fff" />
					<strong>{meetup.location}</strong>
				</Info>
			</Meetup>
		</Container>
	);
}

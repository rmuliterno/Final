import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { format } from 'date-fns-tz';
import { MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Header, Schedule } from './styles';

export default function Dashboard() {
	const [schedule, setSchedule] = useState([]);

	function dateFormat(date) {
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

		const dateFormatted = format(
			parseISO(date),
			"d 'de' MMMM', às' HH'h'",
			{
				timeZone: timezone,
				locale: pt,
			}
		);

		return dateFormatted;
	}

	useEffect(() => {
		async function loadSchedule() {
			const response = await api.get('schedule');

			const { data } = response;

			setSchedule(data);
		}

		loadSchedule();
	}, []);

	return (
		<Container>
			<Header>
				<strong>Meus Meetups</strong>
				<Link to="/meetup">
					<button type="button">Novo Meetup</button>
				</Link>
			</Header>

			<ul>
				{schedule.map(meetup => (
					<Schedule key={meetup.id}>
						<strong>{meetup.title}</strong>
						<div>
							<strong>{dateFormat(meetup.date)}</strong>
							<Link to={`details/${meetup.id}`}>
								<MdChevronRight
									className="icon-right"
									size={32}
									color="#fff"
								/>
							</Link>
						</div>
					</Schedule>
				))}
			</ul>
		</Container>
	);
}

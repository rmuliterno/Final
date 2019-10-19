import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Header, Schedule } from './styles';

export default function Dashboard() {
	return (
		<Container>
			<Header>
				<strong>Meus Meetups</strong>
				<button type="button">Novo Meetup</button>
			</Header>

			<ul>
				<Schedule>
					<strong>Meetup de React Native</strong>
					<div>
						<strong className="date">24 de Junho, às 20h</strong>
						<MdChevronRight
							className="icon-right"
							size={32}
							color="#fff"
						/>
					</div>
				</Schedule>

				<Schedule>
					<strong>Meetup de React Native</strong>
					<div>
						<strong className="date">24 de Junho, às 20h</strong>
						<MdChevronRight
							className="icon-right"
							size={32}
							color="#fff"
						/>
					</div>
				</Schedule>

				<Schedule>
					<strong>Meetup de React Native</strong>
					<div>
						<strong className="date">24 de Junho, às 20h</strong>
						<MdChevronRight
							className="icon-right"
							size={32}
							color="#fff"
						/>
					</div>
				</Schedule>

				<Schedule>
					<strong>Meetup de React Native</strong>
					<div>
						<strong className="date">24 de Junho, às 20h</strong>
						<MdChevronRight
							className="icon-right"
							size={32}
							color="#fff"
						/>
					</div>
				</Schedule>
			</ul>
		</Container>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
	return (
		<>
			<img src={logo} alt="Meetapp" />

			<form>
				<input type="text" placeholder="Nome Completo" />
				<input type="email" placeholder="Seu e-mail" />
				<input type="password" placeholder="Sua senha secreta" />

				<button type="submit">Criar conta</button>

				<Link to="/">Já tenho login</Link>
			</form>
		</>
	);
}

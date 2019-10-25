import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import { Divider } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';

import {
	Header,
	Container,
	Form,
	FormInput,
	SubmitButton,
	Divisor,
} from './styles';

export default function Profile() {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	function handleSubmit(data) {
		dispatch(updateProfileRequest(data));
	}

	StatusBar.setHidden(true, 'none');

	return (
		<Background>
			<Header>
				<Image source={logo} />
			</Header>
			<Container>
				<Form>
					<FormInput
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Nome completo"
						value={name}
						onChangeText={setName}
					/>

					<FormInput
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Digite seu e-mail"
						value={email}
						onChangeText={setEmail}
					/>

					<Divisor>
						<Divider
							style={{
								backgroundColor: 'rgba(255,255,255,0.6)',
							}}
						/>
					</Divisor>

					<FormInput
						secureTextEntry
						placeholder="Sua senha atual"
						onSubmitEditing={handleSubmit}
						value={oldPassword}
						onChangeText={setOldPassword}
					/>

					<FormInput
						secureTextEntry
						placeholder="Nova senha"
						onSubmitEditing={handleSubmit}
						value={password}
						onChangeText={setPassword}
					/>

					<FormInput
						secureTextEntry
						placeholder="Confirmação de senha"
						onSubmitEditing={handleSubmit}
						value={passwordConfirm}
						onChangeText={setPasswordConfirm}
					/>

					<SubmitButton className="save" onPress={handleSubmit}>
						Salvar Perfil
					</SubmitButton>

					<SubmitButton className="logout" onPress={handleSubmit}>
						Sair do Meetapp
					</SubmitButton>
				</Form>
			</Container>
		</Background>
	);
}

Profile.navigationOptions = {
	tabBarLabel: 'Meu perfil',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="person" size={20} color={tintColor} />
	),
};

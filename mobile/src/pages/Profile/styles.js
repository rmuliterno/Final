import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Header = styled.View`
	height: 100px;
	justify-content: center;
	align-items: center;
	padding: 0 18px;
	background: #111;
`;

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
`;

export const Form = styled.KeyboardAvoidingView`
	align-self: stretch;
	margin-top: 50px;
`;

export const FormInput = styled(Input)`
	margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
	margin-top: 5px;
	margin-bottom: 5px;
`;

export const LogoutButton = styled(Button)`
	margin-top: 5px;
	margin-bottom: 5px;
	background: #d44059;
`;

export const Divisor = styled.View`
	margin-bottom: 10px;
`;

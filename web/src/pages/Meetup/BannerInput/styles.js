import styled from 'styled-components';

export const Container = styled.div`
	align-self: center;
	margin-bottom: 30px;
	height: 300px;
	max-width: 1100px;

	label {
		cursor: pointer;
		height: 300px;
		width: 100%;
		background: #000;

		&:hover {
			opacity: 0.7;
		}

		img {
			height: 300px;
			width: 100%;
			border-radius: 6px;
			display: stretch;
		}

		input {
			display: none;
		}
	}
`;

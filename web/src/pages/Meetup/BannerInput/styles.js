import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	align-self: center;
	margin-bottom: 30px;
	max-height: 300px;
	max-width: 1100px;
	min-width: 100%;
	background: #000;
	border-radius: 6px;
	text-align: center;

	label {
		cursor: pointer;
		height: 300px;
		width: 100%;

		&:hover {
			opacity: 0.7;
		}

		img {
			height: 300px;
			width: inherit;
			display: stretch;
			border-radius: 6px;
			opacity: 0.8;
		}

		.centered-text {
			opacity: 0.6;
			position: absolute;
			color: #fff;
			font-size: 20px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			line-height: 27px;
		}

		input {
			display: none;
		}
	}
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	max-width: 1100px;
	margin: 50px auto 0 auto;

	display: flex;
	flex-direction: column;
`;

export const Meetup = styled.div`
	p {
		color: #fff;
		font-size: 18px;
		font-weight: 400px;
		line-height: 32px;
		margin-bottom: 24px;
	}
`;

export const Info = styled.div`
	display: flex;
	align-items: center;

	strong {
		color: #fff;
		opacity: 0.8;
		font-size: 18px;
		font-weight: 400px;
		line-height: 21px;
		margin-left: 8px;
		margin-right: 24px;
	}
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 62px;

	strong {
		color: #ffffff;
		font-size: 32px;
		font-weight: 400;
		line-height: 43px;
	}

	button {
		height: 44px;
		width: 162px;
		font-weight: bold;
		color: #fff;
		border: 0;
		border-radius: 6px;
		font-size: 16px;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		strong {
			font-size: 18px;
			line-height: 21px;
			margin-left: 12px;
		}
	}

	.editar {
		margin-right: 24px;
		transition: background 0.3s;
		background: #4dbaf9;
		&:hover {
			background: ${darken(0.05, '#4dbaf9')};
		}
	}

	.deletar {
		transition: background 0.3s;
		background: #f94d6a;
		&:hover {
			background: ${darken(0.05, '#f94d6a')};
		}
	}
`;

export const Banner = styled.div`
	position: relative;
	align-self: center;
	margin-bottom: 30px;
	max-height: 300px;
	max-width: 1100px;
	min-width: 100%;
	border-radius: 6px;
	text-align: center;

	img {
		height: 300px;
		width: 100%;
		display: stretch;
		border-radius: 6px;
		opacity: 0.8;
	}

	input {
		display: none;
	}
`;

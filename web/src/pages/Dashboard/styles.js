import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	max-width: 1100px;
	margin: 50px auto 0 auto;

	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
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
		background: #f94d6a;
		font-weight: bold;
		color: #fff;
		border: 0;
		border-radius: 6px;
		font-size: 16px;
		transition: background 0.3s;

		&:hover {
			background: ${darken(0.05, '#f94d6a')};
		}
	}
`;

export const Schedule = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	background: rgba(0, 0, 0, 0.1);
	border: 0;
	border-radius: 6px;
	height: 62px;
	padding: 0 15px;
	color: #fff;
	margin: 0 0 10px;

	strong {
		color: #ffffff;
		font-size: 18px;
		font-weight: 400;
	}

	.date {
		/* line-height: 62px; */
	}

	.icon-right {
		margin-left: 24px;
		font-size: 24px;
		font-weight: 400;
		line-height: 62px;
		padding-top: 5px;
	}
`;

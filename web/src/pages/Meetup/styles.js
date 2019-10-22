import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	max-width: 1100px;
	margin: 50px auto 0 auto ;

	form {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		input {
			background: rgba(0, 0, 0, 0.1);
			border: 0;
			border-radius: 6px;
			height: 44px;
			width: 100%;
			padding: 0 15px;
			color: #fff;
			margin: 0 0 10px;

			&::placeholder {
				color: rgba(255, 255, 255, 0.7);
			}
		}

		textarea {
			justify-items: center;
			background: rgba(0, 0, 0, 0.1);
			border: 0;
			border-radius: 6px;
			height: 200px;
			resize: none;
			padding: 0 15px;
			color: #fff;
			margin: 0 0 10px;
			line-height: 24px;

			&::placeholder {
				color: rgba(255, 255, 255, 0.7);
				padding-top: 5px;
				font-size: 14px;
			}
		}

		span {
			color: #f64c75;
			align-self: flex-start;
			margin: 0 0 10px;
			font-weight: bold;
		}

		.save {
			margin: 5px auto;
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
	}
`;

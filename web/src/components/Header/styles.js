import styled from 'styled-components';

export const Container = styled.div`
	background: #000;
	padding: 0 30px;
`;

export const Content = styled.div`
	height: 92px;
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	nav {
		display: flex;
		align-items: center;
	}

	aside {
		display: flex;
		align-items: center;
	}
`;

export const Profile = styled.div`
	display: flex;

	div {
		text-align: right;
		margin-right: 10px;

		strong {
			margin-top: 1px;
			display: block;
			color: #fff;
			line-height: 19px;
		}

		a {
			display: block;
			margin-top: 4px;
			font-size: 12px;
			color: #999;
			line-height: 19px;
		}
	}
	button {
		margin-left: 16px;
		height: 42px;
		width: 71px;
		background: #d44059;
		color: #fff;
		border: 0;
		border-radius: 6px;
		font-size: 16px;
	}
`;

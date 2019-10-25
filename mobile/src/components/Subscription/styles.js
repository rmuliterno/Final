import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: #fff;
	margin-bottom: 24px;
	border-radius: 6px;
`;

export const Banner = styled.Image`
	width: 100%;
	height: 180px;
	border-top-right-radius: 6px;
	border-top-left-radius: 6px;
`;

export const Info = styled.View`
	flex: 1;
	padding: 20px;
	display: flex;
`;

export const Data = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;

	margin-bottom: 12px;
`;

export const Title = styled.Text`
	font-size: 18px;
	margin-bottom: 12px;
	font-weight: 400;
	color: #333;
	line-height: 24px;
`;

export const Date = styled.Text`
	margin-left: 10px;
	font-size: 13px;
	font-weight: 400;
	line-height: 17px;
`;

export const Location = styled.Text`
	margin-left: 10px;
	font-size: 13px;
	font-weight: 400;
	line-height: 17px;
`;

export const Provider = styled.Text`
	margin-left: 10px;
	font-size: 13px;
	font-weight: 400;
	line-height: 17px;
`;

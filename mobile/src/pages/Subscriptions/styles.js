import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
`;

export const Header = styled.View`
	height: 100px;
	justify-content: center;
	align-items: center;
	padding: 0 18px;
	background: #111;
`;

export const Title = styled.Text`
	font-size: 20px;
	color: #fff;
	font-weight: bold;
	align-self: center;
	margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: { padding: 30 },
})``;

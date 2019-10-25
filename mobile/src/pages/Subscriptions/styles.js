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

export const List = styled.FlatList.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: { padding: 30 },
})`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

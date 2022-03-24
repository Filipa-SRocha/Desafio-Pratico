import styled from 'styled-components';

export const Container = styled.div`
	height: 200px;
	background: #1b75bc;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	grid-template-areas:
		'. . . .'
		'. . . .'
		'. imagem texto .'
		'. imagem . .'
		'. imagem . .'; ;
`;

export const FancyText = styled.span`
	grid-area: texto;
	font-family: 'Kaushan Script', cursive;
	color: white;
	font-size: 26px;
	justify-self: start;
`;

export const BannerImage = styled.img`
	grid-area: imagem;
	height: 180px;
	justify-self: end;
`;

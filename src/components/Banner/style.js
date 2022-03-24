import styled from 'styled-components';

export const Container = styled.div`
	height: 200px;
	background: #1b75bc;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	grid-template-areas:
		' . .'
		' . .'
		'imagem texto'
		'imagem .'
		'imagem .';

	@media (max-width: 280px) {
		display: flex;
		align-items: center;
	}
`;

export const FancyText = styled.p`
	grid-area: texto;
	font-family: 'Kaushan Script', cursive;
	color: white;
	font-size: 26px;
	justify-self: start;
	@media (max-width: 280px) {
		text-align: center;
	}
`;

export const BannerImage = styled.img`
	grid-area: imagem;
	height: 180px;
	justify-self: end;
	@media (max-width: 280px) {
		display: none;
	}
`;

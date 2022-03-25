import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: left;
`;

export const ListContainer = styled.div`
	width: 80%;
`;

export const Model = styled.div`
	background: #9dc3e0;
	color: #0b3a5e;
	border-radius: 5px;
	padding: 10px;
	margin: 5px;
	&:nth-child(odd) {
		background: #cde4f5;
	}
`;

export const Marca = styled.div`
	font-weight: bold;
	font-size: 30px;
	color: #0b3a5e;
	align-self: flex-start;
	padding: 30px 10px;
`;

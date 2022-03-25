import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	margin: 40px auto;
`;

export const Arrow = styled.span`
	font-size: 20px;
	font-weight: bold;
`;

export const Tab = styled.div`
	background: #0b3a5e;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	cursor: pointer;
`;

export const Content = styled.div`
	padding: 0 10px;
	max-height: 0;
	overflow: hidden;

	&.show {
		height: auto;
		max-height: 200px;
		overflow: auto;
	}
`;

export const AccordionItem = styled.div`
	margin: 5px;
	padding: 10px;
	color: #0b3a5e;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background: #0b3a5e;
		color: white;
		border-radius: 10px;
	}
`;

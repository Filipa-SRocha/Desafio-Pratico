import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Model, Container, ListContainer, Marca } from './style';
import Header from '../../components/Header';

function Fabricante() {
	const [modelos, setModelos] = useState([]);

	let params = useParams();

	const url = `https://parallelum.com.br/fipe/api/v1/${params.tipo}/marcas/${params.codigo}/modelos`;

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setModelos(data.modelos.reverse());
			});
	}, []);

	return (
		<Container>
			<Header />
			<Marca>{params.marca}</Marca>

			<ListContainer>
				{modelos.map((carro) => {
					return <Model key={carro.nome}>{carro.nome}</Model>;
				})}
			</ListContainer>
		</Container>
	);
}

export default Fabricante;

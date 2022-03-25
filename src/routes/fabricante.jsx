import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Fabricante() {
	const [modelos, setModelos] = useState([]);

	let params = useParams();

	const url = `https://parallelum.com.br/fipe/api/v1/${params.tipo}/marcas/${params.codigo}/modelos`;

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setModelos(data.modelos);
			});
	}, []);

	return (
		<div>
			<h2>Tipo Veiculo: {params.tipo}</h2>
			<h2>Fabricante: {params.codigo}</h2>

			{modelos.map((carro) => {
				return <div key={carro.nome}>{carro.nome}</div>;
			})}
		</div>
	);
}

export default Fabricante;

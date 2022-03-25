import { useParams } from 'react-router-dom';

function Fabricante() {
	let params = useParams();

	return (
		<div>
			<h2>Fabricante: {params.codigo}</h2>
			<p>this is a testy</p>
		</div>
	);
}

export default Fabricante;

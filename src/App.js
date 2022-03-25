import Banner from './components/Banner';
import Header from './components/Header';
import Accordion from './components/Accordion';
import { useEffect, useState } from 'react';

function App() {
	const [info, setInfo] = useState({
		carros: null,
		motos: null,
		caminhoes: null,
	});

	function fetchData(category) {
		const url = `https://parallelum.com.br/fipe/api/v1/${category}/marcas`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const aux = info;

				aux[`${category}`] = data;
				setInfo(aux);
			});
	}

	function getData() {
		fetchData('carros');
		fetchData('motos');
		fetchData('caminhoes');
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(info);
	return (
		<div className='App'>
			<Header />
			<Banner />
			<Accordion title='Carros' content='{carros}' />
		</div>
	);
}

export default App;

import React, { useEffect, useState } from 'react';
import Home from './Pages/Home';

const DataContext = React.createContext();

function App() {
	const [info, setInfo] = useState({
		carros: [],
		motos: [],
		caminhoes: [],
	});
	const dataContextObject = info;

	function fetchData(category) {
		const url = `https://parallelum.com.br/fipe/api/v1/${category}/marcas`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
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

	return (
		<DataContext.Provider value={dataContextObject}>
			<div className='App'>
				<Home />
			</div>
		</DataContext.Provider>
	);
}

export default App;
export { DataContext };

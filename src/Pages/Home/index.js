import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Accordion from '../../components/Accordion';

function Home() {
	return (
		<main>
			<Header />
			<Banner />

			<Accordion title='Carros' />
			<Accordion title='Motos' />
			<Accordion title='Caminhoes' />
		</main>
	);
}

export default Home;

import Banner from './components/Banner';
import Header from './components/Header';
import Accordion from './components/Accordion';

function App() {
	return (
		<div className='App'>
			<Header />
			<Banner />
			<Accordion title='Carros' />
		</div>
	);
}

export default App;

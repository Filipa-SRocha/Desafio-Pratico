import { useState } from 'react';
import { AccordionItem, Arrow, Container, Content, Tab } from './style';
import { DataContext } from '../../App';
import { useContext } from 'react';

function Accordion(props) {
	const [isOpen, setIsOpen] = useState(0);
	const info = useContext(DataContext);
	const [data, setData] = useState(info);

	function toggle() {
		isOpen ? setIsOpen(0) : setIsOpen(1);
	}

	return (
		<Container>
			<div>
				<Tab onClick={toggle}>
					<h3>{props.title}</h3>
					<Arrow>{isOpen ? '^' : 'v'}</Arrow>
				</Tab>

				<Content className={isOpen ? 'show' : ''}>
					{data[`${props.title.toLowerCase()}`].map((marca) => {
						return (
							<AccordionItem key={`${props.title}-${marca.codigo}`}>
								{marca.nome}{' '}
							</AccordionItem>
						);
					})}
				</Content>
			</div>
		</Container>
	);
}

export default Accordion;

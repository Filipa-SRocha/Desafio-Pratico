import { useState } from 'react';
import { Arrow, Container, Content, Tab } from './style';

function Accordion(props) {
	const [isOpen, setIsOpen] = useState(0);

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
					Aqui vai ser a lista
					{/* {props.content.map((marca) => {
						return <div>{marca} </div>;
					})} */}
					{console.log(props.content)}
				</Content>
			</div>
		</Container>
	);
}

export default Accordion;

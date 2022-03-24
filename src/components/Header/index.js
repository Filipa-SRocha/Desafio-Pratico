import logo from '../../assets/doutor-multas-logotipo.png';
import { StyledDiv, Logo } from './style';

function Header() {
	return (
		<StyledDiv>
			<Logo src={logo} alt='Logo Doutor Multas' />
		</StyledDiv>
	);
}

export default Header;

import { BannerImage, Container, FancyText } from './style';

import Cartoon2 from '../../assets/Sitting.png';

function Banner() {
	return (
		<Container>
			<FancyText>Pesquise aqui o seu veiculo</FancyText>

			<BannerImage src={Cartoon2} alt='Pessoa a apontar' />
		</Container>
	);
}

export default Banner;

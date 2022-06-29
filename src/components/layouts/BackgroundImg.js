import womanAbs from '../../assets/womanAbs.jpg';
import womanSquat from '../../assets/womanSquat.jpg';
import { useWindowSize } from '../../utils/useWindowSize';

const BackgroundImg = ({ children }) => {
	const dimension = useWindowSize();
	const isMobile = dimension.width <= 550;

	return (
		<>
			{isMobile ? (
				<div
					style={{
						position: 'relative',
						background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${womanSquat})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						width: '100%',
						height: '100vh',
						color: '#fff',
					}}
				>
					{children}
				</div>
			) : (
				<div
					style={{
						position: 'relative',
						background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${womanAbs})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						width: '100%',
						height: '100vh',
						color: '#fff',
					}}
				>
					{children}
				</div>
			)}
		</>
	);
};

export default BackgroundImg;

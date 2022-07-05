import { useWindowSize } from '../../utils/useWindowSize';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const MainLayout = ({ children }) => {
	const dimension = useWindowSize();

	return (
		<>
			<div className="flex flex-col bg-custom-blue text-custom-light-gray">
				{dimension.width <= 550 ? <NavbarMobile /> : <Navbar />}
				<div className="bg-custom-blue h-full">{children}</div>
			</div>
		</>
	);
};

export default MainLayout;

import { useWindowSize } from '../../utils/useWindowSize';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import BackgroundImg from './BackgroundImg';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
	const dimension = useWindowSize();

	return (
		<div className="flex justify-center">
			<BackgroundImg>
				{dimension.width <= 550 ? <NavbarMobile /> : <Navbar />}
				<div className="text-center absolute top-1/3 w-[300px] font-semibold text-lg left-0 right-0 m-auto">
					<h1 className="p-3">Fitness Club</h1>
					<h1 className="p-3">Sweat, Smile and Repeat</h1>
					<h1 className="p-3">Check out the most effective exercises</h1>
					<div className="flex flex-col">
						<button className="self-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
							</svg>
						</button>
						<button className="mt-5 p-4 bg-custom-red text-custom-light-gray rounded-md hover:text-white">
							<Link to="/explore-exercises">Explore Exercises</Link>
						</button>
					</div>
				</div>
			</BackgroundImg>
		</div>
	);
};

export default HeroBanner;

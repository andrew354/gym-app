import { Link, useLocation } from 'react-router-dom';
import gymLogo3 from '../../assets/gym-logo-removebg-preview.png';

const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<nav className="flex p-4 mb-7 justify-around">
			<div>
				<img className="w-32 object-cover" src={gymLogo3} alt="gymLogo" />
			</div>
			{/* <div className="flex-1" /> */}
			<ul className="flex items-center">
				<li className={`ml-4 ${pathname === '/' ? 'active' : ''}`}>
					<Link to="/">Home</Link>
				</li>
				<li className={`ml-4 ${pathname === '/body-parts' ? 'active' : ''}`}>
					<Link to="/body-parts">Exercises</Link>
				</li>
				<li className={`ml-4 ${pathname === '/create-program' ? 'active' : ''}`}>
					<Link to="/create-program">Create Program</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

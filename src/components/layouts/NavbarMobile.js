import { Link } from 'react-router-dom';
import gymLogo3 from '../../assets/gym-logo-removebg-preview.png';
import './navbarMobile.css';

const NavbarMobile = () => {
	return (
		<section className="top-nav mb-10">
			<div>
				<img className="w-32 object-cover" src={gymLogo3} alt="gymLogo" />
			</div>
			<input id="menu-toggle" type="checkbox" />
			<label className="menu-button-container" htmlFor="menu-toggle">
				<div className="menu-button"></div>
			</label>
			<ul className="menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/body-parts">Exercises</Link>
				</li>
				<li>
					<Link to="/create-program">Create Program</Link>
				</li>
			</ul>
		</section>
	);
};

export default NavbarMobile;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gymLogo3 from '../../assets/gym-logo-removebg-preview.png';
import { useAuthContext } from '../../context/AuthContext';
import Dropdown from '../layouts/Dropdown';

const options = ['register', 'login'];

const Navbar = () => {
	const { pathname } = useLocation();
	const { user, logout } = useAuthContext();
	const [toggleOpen, setToggleOpen] = useState(false);

	return (
		<nav className="flex p-4 mb-7 justify-around">
			<div>
				<img className="w-32 object-cover" src={gymLogo3} alt="gymLogo" />
			</div>
			<ul className="flex items-center">
				<li className={`ml-4 hover:text-custom-red ${pathname === '/' ? 'active' : ''}`}>
					<Link to="/">Home</Link>
				</li>
				<li className={`ml-4 hover:text-custom-red ${pathname === '/body-parts' ? 'active' : ''}`}>
					<Link to="/body-parts">Exercises</Link>
				</li>
				<li className={`ml-4 hover:text-custom-red ${pathname === '/create-program' ? 'active' : ''}`}>
					<Link to="/create-program">Create Program</Link>
				</li>
				<li onClick={() => setToggleOpen(!toggleOpen)} className="ml-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 cursor-pointer hover:text-custom-red"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					{user
						? toggleOpen && (
								<button
									className="absolute mt-2 p-2 rounded-md bg-custom-black border-b-2 border-custom-dark-gray hover:text-custom-red"
									onClick={logout}
								>
									Logout
								</button>
						  )
						: toggleOpen && <Dropdown options={options} setToggleOpen={setToggleOpen} />}
				</li>
				<li className={`ml-4 `}>{user?.displayName || user?.email}</li>
			</ul>
		</nav>
	);
};

export default Navbar;

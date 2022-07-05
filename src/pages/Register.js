import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import MainLayout from '../components/layouts/MainLayout';
import Alert from '../components/layouts/Alert';

const Register = () => {
	const [user, setUser] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const { signUp } = useAuthContext();
	const goToPage = useNavigate();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('user.email  user.password', user.email, user.password);
		if (user.email === '' || user.password === '') {
			console.log('They are empty!!');
			return setError('Email and Password cannot be empty');
		}
		try {
			// setError('');
			await signUp(user.email, user.password);
			goToPage('/');
		} catch (error) {
			setError(error.message);
		}
	};

	console.log('error', error);

	return (
		<MainLayout>
			<div className="w-full h-screen max-w-xs m-auto">
				{error && <Alert message={error} />}
				<form onSubmit={handleSubmit} className="bg-custom-light-gray shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
					<div className="mb-4">
						<label className="block text-custom-dark-gray text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input
							type="text"
							className="shadow appeareance-none border rounded w-full py-2 px-3 text-custom-dark-gray leading-tight focus:outlone-none focus:shadow-outline"
							name="email"
							onChange={(e) => handleChange(e)}
							placeholder="Email"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-custom-dark-gray text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							className="shadow appeareance-none border rounded w-full py-2 px-3 text-custom-dark-gray leading-tight focus:outlone-none focus:shadow-outline"
							name="password"
							onChange={(e) => handleChange(e)}
							placeholder="Password"
						/>
					</div>
					<button
						className="text-sm bg-custom-red hover:font-bold py-2 px-4 rounded text-white focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Register
					</button>
					<p className="text-custom-dark-gray text-sm pt-4">
						Already have an account? <span className="underline">Login</span>
					</p>
				</form>
			</div>
		</MainLayout>
	);
};

export default Register;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import MainLayout from '../components/layouts/MainLayout';
import Alert from '../components/layouts/Alert';

function Login() {
	const [user, setUser] = useState({ email: '', password: '' });
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const goToPage = useNavigate();
	const { login, loginWithGoogle } = useAuthContext();

	const handleLogin = async (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			return setError('Email and Password cannot be empty');
		}
		try {
			await login(email, password);
			setError('');
			goToPage('/');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleGoogleLogin = async () => {
		try {
			await loginWithGoogle();
			setError('');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleResetPassword = () => {
		if (email === '') return setError('Please enter your email');
	};

	return (
		<MainLayout>
			<div className="w-full h-screen max-w-xs m-auto">
				{error && <Alert message={error} />}
				<form className="bg-custom-light-gray shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" onClick={handleLogin}>
					<div className="mb-4">
						<label className="block text-custom-dark-gray text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input
							type="text"
							className="shadow appeareance-none border rounded w-full py-2 px-3 text-custom-dark-gray leading-tight focus:outlone-none focus:shadow-outline"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-custom-dark-gray text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							className="shadow appeareance-none border rounded w-full py-2 px-3 text-custom-dark-gray leading-tight focus:outlone-none focus:shadow-outline"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							required
						/>
					</div>
					<button
						className="text-sm bg-custom-red hover:font-bold py-2 px-4 rounded text-white focus:outline-none focus:shadow-outline"
						onClick={(e) => handleLogin(e)}
					>
						Login
					</button>
					<button className="text-sm bg-blue-500 text-white mt-2 py-2 px-3 rounded hover:font-bold" onClick={handleGoogleLogin}>
						Login with Google
					</button>
					<div className="text-custom-blue">
						<div className="py-3 text-sm">
							<Link onClick={handleResetPassword} className="underline" to="#!">
								Forgot Password?
							</Link>
							<div className="flex py-2">
								<p>Don't have an account?</p>
								<Link className="underline pl-3" to="/register">
									Register now.
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</MainLayout>
	);
}
export default Login;

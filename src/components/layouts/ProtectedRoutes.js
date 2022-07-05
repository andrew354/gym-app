import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedRoutes = ({ children }) => {
	const { user, loading } = useAuthContext();

	console.log('user from Protected ', user);

	if (loading) return <h2>Loading...</h2>;

	if (!user) return <Navigate to="/login" />;

	return <>{children}</>;
};

export default ProtectedRoutes;

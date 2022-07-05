import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '../utils/firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
		} catch (error) {
			return <h1>An error occured. Please refresh the page.</h1>;
		}
	};

	const logout = () => signOut(auth);

	const loginWithGoogle = async () => {
		const googleProvider = await new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
	}, []);

	return <AuthContext.Provider value={{ signUp, login, user, logout, loginWithGoogle }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	const { signUp, login, user, logout, loading, loginWithGoogle } = useContext(AuthContext);
	if (!signUp) throw new Error('No user found');

	return {
		signUp: signUp,
		login: login,
		user: user,
		logout: logout,
		loading: loading,
		loginWithGoogle: loginWithGoogle,
	};
};

export default AuthContextProvider;

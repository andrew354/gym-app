import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const MEASUREMENT_ID = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: 'react-gym-app-444a5.firebaseapp.com',
	projectId: 'react-gym-app-444a5',
	storageBucket: 'react-gym-app-444a5.appspot.com',
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		console.log('res', res);
		const user = res.user;
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

export const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

export const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

export const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

export const logout = () => {
	signOut(auth);
};

// rules
// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 7, 29);
//     }
//   }
// }

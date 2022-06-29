// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAATvJojY8L67DUY_lkdTvyMEju4omMbDs',
	authDomain: 'react-gym-app-444a5.firebaseapp.com',
	projectId: 'react-gym-app-444a5',
	storageBucket: 'react-gym-app-444a5.appspot.com',
	messagingSenderId: '334460295238',
	appId: '1:334460295238:web:23e711bd27ab219f149247',
	measurementId: 'G-3Z64GVZWBX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

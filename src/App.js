import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import BodyParts from './pages/BodyParts';
import ExploreExercises from './pages/ExploreExercises';
import CreateProgram from './pages/CreateProgram';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './components/layouts/ProtectedRoutes';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/body-parts" element={<BodyParts />} />
				<Route path="/explore-exercises" element={<ExploreExercises />} />
				<Route
					path="/create-program"
					element={
						<ProtectedRoutes>
							<CreateProgram />
						</ProtectedRoutes>
					}
				/>
				<Route path="/body-parts/exercise/:id" element={<ExerciseDetail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
};

export default App;

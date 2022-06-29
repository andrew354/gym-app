import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import BodyParts from './pages/BodyParts';
import ExploreExercises from './pages/ExploreExercises';
import CreateProgram from './pages/CreateProgram';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/body-parts" element={<BodyParts />} />
				<Route path="/explore-exercises" element={<ExploreExercises />} />
				<Route path="/create-program" element={<CreateProgram />} />
				<Route path="/body-parts/exercise/:id" element={<ExerciseDetail />} />
			</Routes>
		</>
	);
};

export default App;

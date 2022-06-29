import { useGlobalContext } from '../context/GlobalContext';
import ExercCard from './ExercCard';

const Exercises = () => {
	const { filteredExercises } = useGlobalContext();

	return (
		<div>
			<h2>Exercises</h2>
			{filteredExercises?.map((exerc, index) => (
				<div key={index}>
					<ExercCard exercise={exerc} />
				</div>
			))}
		</div>
	);
};

export default Exercises;

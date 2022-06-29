import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import MainLayout from '../components/layouts/MainLayout';
import Detail from '../components/layouts/ExerciseDetails/Detail';
import ExerciseVideos from '../components/layouts/ExerciseDetails/ExerciseVideos';
import SimilarExercises from '../components/layouts/ExerciseDetails/SimilarExercises';

const ExerciseDetail = () => {
	const { id } = useParams();
	const { exercises } = useGlobalContext();
	const [exercise, setExercise] = useState();

	const getExercise = async () => {
		const exercise = exercises?.find((exercise) => exercise.id === id);
		// const req = await fetchData(`${URL_EXERCISE_BY_ID}/${id}`, URL_OPTIONS);
		// console.log('req', req);
		// setExercise(req.data);
		setExercise(exercise);
	};

	useEffect(() => {
		getExercise();
	}, [id, exercises]);

	return (
		<MainLayout>
			{exercise && <Detail exercise={exercise} />}
			{exercise && <ExerciseVideos exercise={exercise} />}
			{exercise && <SimilarExercises exercise={exercise} />}
		</MainLayout>
	);
};

export default ExerciseDetail;

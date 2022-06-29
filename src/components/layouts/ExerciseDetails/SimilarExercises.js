import { useEffect } from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../../../context/GlobalContext';
import Slider from '../Slider/Slider';

const SimilarExercises = ({ exercise }) => {
	const [similarExercises, setSimilarExercises] = useState();
	const { exercises, targetCat } = useGlobalContext();

	const getSimilarExercises = () => {
		const filterTargetEquipment = exercises.filter(
			(exerc) => exerc.equipment === exercise.equipment && exerc.target === exercise.target
		);

		setSimilarExercises(filterTargetEquipment);
	};
	useEffect(() => {
		getSimilarExercises();
	}, [exercise]);

	return (
		<>
			<h2 className="text-center text-2xl">Similar Exercises</h2>
			<Slider dataSlider={similarExercises} />
		</>
	);
};

export default SimilarExercises;

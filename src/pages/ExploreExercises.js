import Exercises from '../components/Exercises';
import FilterField from '../components/FilterField';
import MainLayout from '../components/layouts/MainLayout';

const ExploreExercises = () => {
	return (
		<div>
			<MainLayout>
				<h2>ExploreExercises</h2>
				<FilterField />
				<Exercises />
			</MainLayout>
		</div>
	);
};

export default ExploreExercises;

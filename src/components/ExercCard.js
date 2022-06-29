import { capitalizeFirstLetter } from '../utils/utilsFunction';

const ExercCard = ({ exercise, cardStyle }) => {
	return (
		<div className={cardStyle && `card ${cardStyle}`}>
			<div className="min-w-[310px] max-w-[360px] min-h-[450px] p-5 m-6 bg-white text-custom-dark-gray border-t-4 border-x border-x-custom-light-gray border-t-custom-red border-b border-b-custom-light-gray rounded-md">
				<h2 className="font-bold text-base m-3 max-w-[260px]">{capitalizeFirstLetter(exercise.name)}</h2>
				<img className="w-72 h-72" src={exercise.gifUrl} alt="" />
				<div className="text-custom-light-gray text-center ">
					<p className="px-4 py-1 m-2 rounded-3xl bg-custom-dark-green inline-block">{exercise.target}</p>
					<p className="px-4 py-1 rounded-3xl bg-custom-dark-gray inline-block">{exercise.equipment}</p>
				</div>
			</div>
		</div>
	);
};

export default ExercCard;

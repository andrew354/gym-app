import BodyPartImg from '../../../assets/icons/body-part.png';
import TargetImg from '../../../assets/icons/target.png';
import EquipmentImg from '../../../assets/icons/equipment.png';
import { capitalizeFirstLetter } from '../../../utils/utilsFunction';

const Detail = ({ exercise }) => {
	const { bodyPart, equipment, gifUrl, name, target } = exercise;
	const exerciseDetail = [
		{ detail: bodyPart, icon: BodyPartImg },
		{ detail: target, icon: TargetImg },
		{ detail: equipment, icon: EquipmentImg },
	];

	return (
		<div className="flex flex-wrap justify-center gap-8">
			<img className="rounded-md" src={gifUrl} alt="" />
			<div className="max-w-[320px]">
				<h2 className="font-bold mb-6 text-2xl">{capitalizeFirstLetter(name)}</h2>
				<p>
					Exercises keep you strong! {name} is one of the effective exercise to target your {target}. It will help to improve your
					mood and release the stress!
				</p>
				{exerciseDetail.map((exercise, index) => (
					<div key={index} className="flex items-center mt-2">
						<img className="px-6 mt-2" src={exercise.icon} alt="" />
						<p className="px-6">{exercise.detail}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Detail;

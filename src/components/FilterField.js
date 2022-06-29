import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import ExercCard from './ExercCard';

const FilterField = () => {
	const { exercises, bodyPartsCat, equipmentCat, targetCat } = useGlobalContext();

	const [filters, setFilters] = useState({ bodypartFilter: '', equipmentFilter: '', targetFilter: '' });

	const [filteredBodyParts, setFilteredBodyParts] = useState(bodyPartsCat);
	const [filteredEquipment, setFilteredEquipment] = useState(equipmentCat);
	const [filteredTarget, setFilteredTarget] = useState(targetCat);

	const [exercisesChoosen, setExercisesChoosen] = useState([]);

	useEffect(() => {
		setFilteredBodyParts(bodyPartsCat);
		setFilteredEquipment(equipmentCat);
		setFilteredTarget(targetCat);
	}, [bodyPartsCat, equipmentCat, targetCat]);

	const handleOnChange = () => {
		if (filters.bodypartFilter !== '') {
			const filteredBodyPart = exercises?.filter((exerc) => exerc.bodyPart === filters.bodypartFilter);
			const filteredEquipmentCat = [...new Set(filteredBodyPart?.map((exer) => exer.equipment))];
			setFilteredEquipment(filteredEquipmentCat);

			if (filters.equipmentFilter !== '') {
				const filteredTarget = [...new Set(filteredBodyPart?.map((exer) => exer.target))];
				setFilteredTarget(filteredTarget);
			}
		}
	};

	useEffect(() => {
		handleOnChange();
	}, [filters]);

	const handleCategoryFilter = () => {
		const exerciseChoosen = exercises.filter(
			(exerc) =>
				exerc.bodyPart === filters.bodypartFilter &&
				exerc.equipment === filters.equipmentFilter &&
				exerc.target === filters.targetFilter
		);
		setExercisesChoosen(exerciseChoosen);
	};

	return (
		<div>
			<h2>FilterField</h2>
			<select onChange={(e) => setFilters({ ...filters, bodypartFilter: e.target.value })}>
				{/* <select onChange={(e) => handleFilter(e)}> */}
				<option>Select body part</option>
				{filteredBodyParts?.map((exerc, index) => (
					<option key={index} value={exerc}>
						{exerc}
					</option>
				))}
			</select>
			<select onChange={(e) => setFilters({ ...filters, equipmentFilter: e.target.value })} name="" id="">
				<option>Select equipment</option>
				{filteredEquipment?.map((exerc, index) => (
					<option key={index} value={exerc}>
						{exerc}
					</option>
				))}
			</select>
			<select onChange={(e) => setFilters({ ...filters, targetFilter: e.target.value })} name="" id="">
				<option>Select target</option>
				{filteredTarget?.map((exerc, index) => (
					<option key={index} value={exerc}>
						{exerc}
					</option>
				))}
			</select>
			<button className="p-3 bg-slate-600 text-white rounded" onClick={handleCategoryFilter}>
				Apply Filters
			</button>
			{exercisesChoosen?.map((exerc, index) => (
				<div key={index}>
					<ExercCard exercise={exerc} />
				</div>
			))}
		</div>
	);
};

export default FilterField;

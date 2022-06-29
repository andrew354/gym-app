import { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const FilterSearch = () => {
	const { exercises, setFilteredExercises, filteredExercises } = useGlobalContext();
	const [search, setSearch] = useState('');

	const handleSearch = () => {
		if (search !== '') {
			const filteredExercises = exercises?.filter((exerc) => exerc.target.includes(search) || exerc.name.includes(search));
			setFilteredExercises(filteredExercises);
			setSearch('');
		}
	};

	return (
		<div>
			<h2>FilterSearch</h2>
			<input className="border-black p-3" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
			<button className="p-3 bg-slate-600 text-white rounded" onClick={() => handleSearch()}>
				Search
			</button>
		</div>
	);
};

export default FilterSearch;

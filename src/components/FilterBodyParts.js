import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import ExercCard from './ExercCard';
import Slider from './layouts/Slider/Slider';
import SliderArrow from './layouts/Slider/SliderArrow';

import Pagination from './Pagination';

let PageSize = 10;

const FilterBodyParts = () => {
	const { bodyParts, exercises } = useGlobalContext();
	const [filterCat, setFilterCat] = useState();
	const [filteredExerc, setFilteredExerc] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return filteredExerc?.slice(firstPageIndex, lastPageIndex);
	}, [filteredExerc, currentPage]);

	useEffect(() => {
		setFilterCat('all');
		setFilteredExerc(exercises);
	}, [bodyParts, exercises]);

	const handleFilterCategory = () => {
		if (filterCat === 'all') {
			setFilteredExerc(exercises);
		} else {
			const filteredExerc = exercises?.filter((exerc) => exerc.bodyPart === filterCat);
			setFilteredExerc(filteredExerc);
		}
		setCurrentPage(1);
	};

	useEffect(() => {
		handleFilterCategory();
	}, [filterCat]);

	return (
		<>
			<div className="flex justify-around flex-wrap">
				<div className="p-7 flex overflow-scroll w-[750px]">
					{bodyParts?.map((part, index) => (
						<div key={index}>
							<button
								onClick={(e) => setFilterCat(e.target.innerHTML)}
								className="mx-5 my-3 p-3 bg-custom-dark-gray text-white rounded whitespace-nowrap"
							>
								{part === filterCat ? <p className="text-custom-red font-bold">{filterCat}</p> : part}
							</button>
						</div>
					))}
				</div>
			</div>
			<div className="py-4 flex justify-center">Found {filteredExerc?.length} exercises.</div>
			<div className="flex justify-center">
				<SliderArrow />
			</div>
			<div className="flex flex-wrap justify-center">
				{/* {filteredExerc?.map((exerc) => (
					<div key={exerc.id}>
						<ExercCard exercise={exerc} />
					</div>
				))} */}

				{currentTableData?.map((exerc, index) => (
					<div key={index}>
						<Link to={`exercise/${exerc.id}`}>
							<ExercCard exercise={exerc} />
						</Link>
					</div>
				))}
			</div>
			{filteredExerc && (
				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={filteredExerc?.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			)}
		</>
	);
};

export default FilterBodyParts;

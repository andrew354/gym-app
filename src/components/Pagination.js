import classnames from 'classnames';
import { useEffect } from 'react';
import { usePagination, DOTS } from '../utils/usePagination';
import './pagination.css';

const Pagination = (props) => {
	const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	if (currentPage === 0 || paginationRange?.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange?.length - 1];

	return (
		// <ul className={classnames('pagination-container', { [className]: className })}>
		<ul className="text-white flex justify-center">
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === 1,
				})}
				onClick={onPrevious}
			>
				<div className="arrow left cursor-pointer" />
			</li>
			{paginationRange?.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return (
						<li key={index} className="pagination-item dots">
							&#8230;
						</li>
					);
				}

				return (
					<li
						key={index}
						className={classnames('pagination-item cursor-pointer', {
							selected: pageNumber === currentPage,
						})}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={classnames('pagination-item cursor-pointer', {
					disabled: currentPage === lastPage,
				})}
				onClick={onNext}
			>
				<div className="arrow right cursor-pointer" />
			</li>
		</ul>
	);
};

export default Pagination;

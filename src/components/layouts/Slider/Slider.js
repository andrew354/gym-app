import { useState } from 'react';
import './slider.css';
import ExercCard from '../../ExercCard';
import { chunkArray } from '../../../utils/utilsFunction';
import { useWindowSize } from '../../../utils/useWindowSize';

const setCardToShow = (width) => {
	let cardToShow;
	if (width <= 790) {
		cardToShow = 1;
	} else if (width <= 1150) {
		cardToShow = 2;
	} else cardToShow = 3;

	return cardToShow;
};

const Slider = ({ dataSlider }) => {
	const [index, setIndex] = useState(0);
	const { width } = useWindowSize();
	const chunkedArray = chunkArray(setCardToShow(width), dataSlider);

	const slideLeft = () => {
		if (index - 1 >= 0) {
			setIndex(index - 1);
		}
	};

	const slideRight = () => {
		if (index + 1 <= dataSlider?.length - 1) {
			setIndex(index + 1);
		}
	};

	return (
		<div className="flex justify-center">
			<button className="z-10" onClick={slideLeft}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 hover:text-custom-red"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
			</button>
			<div className="flex justify-center h-[500px]">
				{chunkedArray?.map((chunk, arrayIndex) => {
					let position = arrayIndex > index ? 'nextCard' : arrayIndex === index ? 'activeCard' : 'prevCard';
					return (
						<div className="flex justify-center">
							{chunk?.map((item) => (
								<ExercCard key={item.id} exercise={item} cardStyle={position} />
							))}
						</div>
					);
				})}
			</div>
			<button className="z-10" onClick={slideRight}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 hover:text-custom-red"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</button>
		</div>
	);
};

export default Slider;

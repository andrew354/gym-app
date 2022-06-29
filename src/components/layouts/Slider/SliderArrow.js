import { useState } from 'react';

const SliderArrow = () => {
	return (
		<div className="w-40 flex justify-around">
			<button>
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
			<button>
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

export default SliderArrow;

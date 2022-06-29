import { useEffect, useState } from 'react';

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	const updateDimensions = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		updateDimensions();
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return windowSize;
};

import { useEffect, useState } from 'react';

const Alert = ({ message }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const time = setTimeout(() => setShow(false), 3000);

		return () => {
			clearTimeout(time);
		};
	}, []);

	if (!show) {
		return null;
	}

	return (
		<>
			{show && (
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-center">
					<span>{message}</span>
				</div>
			)}
		</>
	);
};

export default Alert;

import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/utilsFunction';

const Dropdown = ({ options, setToggleOpen }) => {
	return (
		<div className="absolute w-20 mt-2 text-center">
			{options?.map((option, index) => (
				<Link key={index} to={`/${option}`}>
					<option
						className="p-2 rounded-md bg-custom-black border-b-2 border-custom-dark-gray hover:text-custom-red"
						onClick={() => setToggleOpen(false)}
						value={option}
					>
						{capitalizeFirstLetter(option)}
					</option>
				</Link>
			))}
		</div>
	);
};

export default Dropdown;

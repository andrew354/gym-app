import React from 'react';
import FilterField from '../components/FilterField';
import MainLayout from '../components/layouts/MainLayout';

const CreateProgram = () => {
	return (
		<div>
			<MainLayout>
				<h2>CreateProgram</h2>
				<FilterField />
				{/* <Register /> */}
			</MainLayout>
		</div>
	);
};

export default CreateProgram;

import React from 'react';
import FilterBodyParts from '../components/FilterBodyParts';
import MainLayout from '../components/layouts/MainLayout';

const BodyParts = () => {
	return (
		<MainLayout isHeroView={true}>
			<FilterBodyParts />
		</MainLayout>
	);
};

export default BodyParts;

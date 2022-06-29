import { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from '../utils/utilsFunction';

export const BodyPartsContext = createContext();

const URL_BODY_PARTS = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`;
const URL_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad8ae7479fmsh19fa7bc98ad8d27p12039cjsn92631ed60738',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const BodyPartsContextProvider = ({ children }) => {
	const { data, isLoading, error } = useQuery(['bodyParts'], () => fetchData(URL_BODY_PARTS, URL_OPTIONS), {
		staleTime: Infinity,
	});
	const [bodyCategory, setBodyCategory] = useState('all');
	const bodyPartList = {
		data,
		isLoading,
		error,
		bodyCategory,
		setBodyCategory,
	};

	if (data) return <BodyPartsContext.Provider value={bodyPartList}>{children}</BodyPartsContext.Provider>;
};

export const useBodyPartsContext = () => {
	const bodyPartsContext = useContext(BodyPartsContext);
	const setBodyCategory = bodyPartsContext?.setBodyCategory;
	const bodyCategory = bodyPartsContext?.bodyCategory;

	return {
		data: ['all', ...bodyPartsContext?.data?.data],
		isLoading: bodyPartsContext?.isLoading,
		error: bodyPartsContext?.error,
		setBodyPartCat: setBodyCategory,
		bodyPartCat: bodyCategory,
	};
};

import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import data from '../data/db.json';

const URL_JSON_DATA = `data/db.json`;

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [exercises, setExercises] = useState([]);
	const [bodyParts, setBodyParts] = useState([]);
	const [filteredExercises, setFilteredExercises] = useState([]);

	const fetchJson = async (url) => {
		// const res = await axios.get(url);
		// const data = await res.data;
		setExercises(data?.apiJson?.exercises);
		setBodyParts(data?.apiJson?.bodyPartsList);
	};

	const bodyPartsCat = [...new Set(exercises.map((exerc) => exerc.bodyPart))];
	const equipmentCat = [...new Set(exercises.map((exerc) => exerc.equipment))];
	const targetCat = [...new Set(exercises.map((exerc) => exerc.target))];

	useEffect(() => {
		fetchJson(URL_JSON_DATA);
	}, []);

	const globalData = {
		exercises: exercises,
		bodyParts: bodyParts,
		setFilteredExercises,
		filteredExercises,
		bodyPartsCat,
		equipmentCat,
		targetCat,
	};

	return <GlobalContext.Provider value={globalData}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
	const globalContext = useContext(GlobalContext);
	const { exercises, bodyParts, setFilteredExercises, filteredExercises, bodyPartsCat, equipmentCat, targetCat } = globalContext;

	return {
		exercises,
		bodyParts,
		setFilteredExercises,
		filteredExercises,
		bodyPartsCat,
		equipmentCat,
		targetCat,
	};
};

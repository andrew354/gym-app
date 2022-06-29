import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from '../utils/utilsFunction';

const URL_EXERCISES = `https://exercisedb.p.rapidapi.com/exercises`;
const URL_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad8ae7479fmsh19fa7bc98ad8d27p12039cjsn92631ed60738',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const ExercisesContext = createContext();

export const ExercisesContextProvider = ({ children }) => {
	const {
		data: exercisesData,
		isLoading,
		error,
	} = useQuery(['exercises'], fetchData(URL_EXERCISES, URL_OPTIONS), {
		staleTime: Infinity,
	});

	const exercisesList = {
		exercisesData: exercisesData,
	};

	return <ExercisesContext.Provider value={exercisesList}>{children}</ExercisesContext.Provider>;
};

export const useExercisesContext = () => {
	const exercisesData = useContext(ExercisesContext);

	return {
		exercisesData,
	};
};

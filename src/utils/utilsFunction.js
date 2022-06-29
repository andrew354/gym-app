import axios from 'axios';

export const capitalizeFirstLetter = (string) => {
	const strArr = string?.split(' ');
	const capitalizeLetter = strArr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
	return capitalizeLetter;
};

export const fetchData = async (url, url_options) => {
	return await axios.get(url, url_options);
};

export const URL_BODY_PARTS = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`;
export const YOUTUBE_SEARCH_URL = 'https://youtube-search-and-download.p.rapidapi.com';
export const URL_EXERCISE_BY_ID = 'https://exercisedb.p.rapidapi.com/exercises/exercise';

export const URL_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad8ae7479fmsh19fa7bc98ad8d27p12039cjsn92631ed60738',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const URL_OPTIONS_YOUTUBE_API = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad8ae7479fmsh19fa7bc98ad8d27p12039cjsn92631ed60738',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	},
};

export const chunkArray = (perChunk, inputArray, windowSize) => {
	return inputArray?.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
};

// var perChunk = 2; // items per chunk
// var inputArray = ['a', 'b', 'c', 'd', 'e'];
// var result = inputArray.reduce((resultArray, item, index) => {
// 	const chunkIndex = Math.floor(index / perChunk);

// 	if (!resultArray[chunkIndex]) {
// 		resultArray[chunkIndex] = []; // start a new chunk
// 	}

// 	resultArray[chunkIndex].push(item);

// 	return resultArray;
// }, []);

// console.log(result); // result: [['a','b'], ['c','d'], ['e']]

import { useEffect } from 'react';
import { useState } from 'react';
import { fetchData, YOUTUBE_SEARCH_URL, URL_OPTIONS_YOUTUBE_API } from '../../../utils/utilsFunction';

const ExerciseVideos = ({ exercise }) => {
	const [youtubeVideos, setYoutubeVideos] = useState();

	const getYoutubeVideos = async () => {
		const request = await fetchData(`${YOUTUBE_SEARCH_URL}/search?query=${exercise?.name}`, URL_OPTIONS_YOUTUBE_API);
		const youtubeVideos = await request.data?.contents?.slice(0, 3);
		if (youtubeVideos) {
			setYoutubeVideos(youtubeVideos);
		}
	};

	useEffect(() => {
		getYoutubeVideos();
	}, [exercise]);

	return (
		<div className="flex flex-col justify-center py-8">
			<h2 className="text-center m-7 text-2xl">
				Watch <span className="text-custom-red">{exercise.name}</span> exercise videos
			</h2>
			<div className="flex justify-center flex-wrap gap-7 gap">
				{youtubeVideos?.map((item, index) => (
					<div className="w-[360px] rounded-sm" key={index}>
						<a href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`} target="_blank" rel="noreferrer">
							<img className="w-[360px] h-[210px] rounded-lg" src={item?.video?.thumbnails[0]?.url} alt={item.video.title} />
							<p className="text-custom-red underline">{item?.video?.title}</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExerciseVideos;

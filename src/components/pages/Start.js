import React from 'react';
import HeroStart from '../hero/HeroStart';
import Feature from '../feature/Feature';

const Start = () => {
	return (
		<>
			<HeroStart />
			<Feature title="Now Playing movies" resource="movie/now_playing" />
			<Feature title="Popular Movies" resource="movie/popular" />
			<Feature title="Popular TV-Shows" resource="tv/popular" />
		</>
	)
}

export default Start;
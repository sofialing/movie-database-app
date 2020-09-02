import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import MovieCard from './MovieCard'
import FeaturedCast from '../cast/FeaturedCast';

const SingleMovie = () => {
	const [{ data }, setUrl] = useFetch('');
	const { movieId } = useParams();

	useEffect(() => {
		setUrl(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
	}, [movieId, data, setUrl])

	return (
		<>
			{data && data.title ? (
				<>
					<MovieCard movie={data} />
					<FeaturedCast />
				</>
			) : ''}
		</>
	)

}

export default SingleMovie;
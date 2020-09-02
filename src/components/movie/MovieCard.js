import React from 'react'
import MovieDetails from './MovieDetails'

const MovieCard = ({ movie }) => {
	return (
		<section className='movie-backdrop' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
			<div className='container movie-info'>
				<div className='movie-poster'>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						alt={`Poster of '${movie.title}'`}
						className='img-fluid'
					/>
				</div>
				<div className='movie-details'>
					<div>
						<h1 className='display-4 text-uppercase font-weight-bolder mb-2'>
							{movie.title}
						</h1>
						<p className='lead'>{movie.overview}</p>
					</div>
					<MovieDetails movie={movie} />
				</div>
			</div>
		</section>
	)
}

export default MovieCard

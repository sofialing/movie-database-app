import React from 'react'
import MovieDetails from './MovieDetails'

const MovieCard = ({ movie }) => {
	const backdrop = { backgroundImage: `url(${movie.backdrop})` }
	return (
		<section className='movie-backdrop' style={backdrop}>
			<div className='container movie-info'>
				<div className='movie-poster'>
					<img
						src={movie.poster}
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
					<MovieDetails details={movie.details} />
				</div>
			</div>
		</section>
	)
}

export default MovieCard

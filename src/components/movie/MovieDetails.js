import React from 'react';

const MovieDetails = ({ movie }) => {
	const details = [
		{
			type: 'Genres',
			info: movie.genres.map(genre => genre.name).join(', ')
		},
		{
			type: 'Rating',
			info: `${movie.vote_average}/10`
		},
		{
			type: 'Runtime',
			info:
				Math.floor(movie.runtime / 60) +
				' hours ' +
				(movie.runtime % 60) +
				' min '
		},
		{
			type: 'Language',
			info: movie.spoken_languages.map(language => language.name).join(', ')
		},
		{
			type: 'Status',
			info: movie.status
		},
		{
			type: 'Release date',
			info: movie.release_date
		},
		{
			type: 'Budget',
			info: `$${movie.budget.toLocaleString()}`
		}
	]

	return (
		<ul>
			{details.map((item, i) => (
				<li key={i}>
					<h3>{item.type}</h3>
					<span>{item.info}</span>
				</li>
			))}
		</ul>
	)
}

export default MovieDetails;

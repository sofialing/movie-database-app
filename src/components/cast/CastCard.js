import React from 'react';

const CastCard = ({ cast }) => {
	const { profile_path, name, character } = cast

	return (
		<div className='col-2'>
			<img
				src={'https://image.tmdb.org/t/p/w500/' + profile_path}
				alt={name}
				className='img-fluid mb-2'
			/>
			<h3 className='h6 font-weight-bold mb-0'>{name}</h3>
			<p className='small'>{character}</p>
		</div>
	)
}

export default CastCard;

import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

const HeroSearch = () => {
	const [search, setSearch] = useState('');
	const [{ data }, setUrl] = useFetch('');
	const history = useHistory();


	useEffect(() => {
		if (search < 3) return;
		setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`)

	}, [search, setUrl])

	return (
		<form id='hero-search' onSubmit={(e) => e.preventDefault()}>
			<div className="form-group">
				<div className='input-group input-group-lg'>
					<input
						autoComplete='off'
						className='form-control'
						onChange={e => setSearch(e.target.value)}
						placeholder='Search for movies...'
						type='text'
						value={search}
					/>
					<div className='input-group-append'>
						<button className='btn btn-primary' type='submit'>
							<i className='fas fa-search'></i>
						</button>
					</div>
				</div>
				<div className="suggestions">
					<ul className="list-group list-group-flush">
						{data && data.page ? (
							data.results.map(item => (
								<li className="list-group-item" key={item.id} onClick={() => history.push(`/movie/${item.id}`)}>
									<h3 className='h6 font-weight-bolder mb-0'>{item.title}</h3>
									<p className='mb-0'>{item.release_date
										? item.release_date.substring(0, 4)
										: 'Year not available'}</p>
								</li>
							))
						) : (
								''
							)}
					</ul>
				</div>
			</div>
		</form>
	)
}

export default HeroSearch;

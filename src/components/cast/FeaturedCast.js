import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import CastCard from './CastCard'

const FeaturedCast = () => {
	const [{ data }, setUrl] = useFetch('');
	const { pathname } = useLocation();

	useEffect(() => {
		setUrl(`https://api.themoviedb.org/3${pathname}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
	}, [setUrl, pathname])

	return (
		<section className='container my-5'>
			<div className='row'>
				<div className='col d-flex justify-content-between align-content-center'>
					<h2 className='font-weight-bold text-uppercase h4 mb-3'>
						Top billed cast
					</h2>
					<Link to={pathname + '/cast'} className='text-uppercase'>
						Full cast &amp; crew
					</Link>
				</div>
			</div>
			<div className='row'>
				{data && data.cast ? (
					data.cast
						.slice(0, 6)
						.map((cast, i) => <CastCard cast={cast} key={i} />)
				) : (
						<p>Nothing to display</p>
					)}
			</div>
		</section>
	)

}

export default FeaturedCast;
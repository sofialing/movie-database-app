import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Featured = ({ title, resource }) => {
	const [{ data, error }, setUrl] = useFetch('');

	useEffect(() => {
		setUrl(`https://api.themoviedb.org/3/${resource}?api_key=${process.env.REACT_APP_API_KEY}`);
	}, [data, setUrl, resource]);

	return (
		<section className="container my-5">
			<div className="row">
				<div className="col d-flex justify-content-between align-content-center">
					<h2 className="font-weight-bold text-uppercase h4 mb-3">{title}</h2>
					<Link to={`/${resource}`} className="text-uppercase">Show more</Link>
				</div>
			</div>
			<div className="row">
				{error ? (
					<p>Nothing to show</p>
				) : (data && data.page ? (
					data.results.splice(0, 4).map(item => (
						<div className="col-3" key={item.id}>
							<Link to={`/${resource.split('/')[0]}/${item.id}`} >
								<img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt="" />
							</Link>
						</div>
					))
				) : ''
					)
				}
			</div>
		</section>
	);
}

export default Featured;
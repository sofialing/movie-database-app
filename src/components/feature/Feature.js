import React from 'react';
import { Link } from 'react-router-dom';


const Feature = ({ title, data, type }) => {
	const featureList = data.length ? (
		data.slice(0, 4).map(item => {
			return (
				<div className="col-3" key={item.id}>
					<Link to={`/${type}/${item.id}`} >
						<img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt="" />
					</Link>
				</div>
			);
		})
	) : (
			<p>Nothing to show</p>
		);

	return (
		<section className="container mb-5">
			<div className="row">
				<div className="col d-flex justify-content-between align-content-center">
					<h2 className="font-weight-bold text-uppercase h4 mb-3">{title}</h2>
					<Link to="/" className="text-uppercase">Show more</Link>
				</div>
			</div>
			<div className="row">{featureList}</div>
		</section>
	);
};

export default Feature;

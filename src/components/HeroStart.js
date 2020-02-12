import React, { Component } from 'react';
import HeroSearch from './HeroSearch';

export default class HeroStart extends Component {
	render() {
		return (
			<section className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-3 font-weight-bold text-uppercase">
						The movie database
					</h1>
					<p className="lead mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						a eros quis sem placerat ultricies et id ipsum. Aliquam
						sollicitudin maximus nulla vel ultrices. Vivamus pulvinar
						semper neque, sed convallis nisi ultrices quis
					</p>
					<HeroSearch />
				</div>
			</section>
		);
	}
}

import React, { Component } from 'react';

export default class HeroSearch extends Component {
	render() {
		return (
			<form id="hero-search">
				<div className="input-group input-group-lg">
					<input
						type="text"
						className="form-control"
						placeholder="Search for a movie, tv show or actor...."
					/>
					<div className="input-group-append">
						<button className="btn btn-danger" type="button">
							<i className="fas fa-search"></i>
						</button>
					</div>
				</div>
			</form>
		);
	}
}

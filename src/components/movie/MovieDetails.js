import React, { Component } from 'react'
import MovieCard from './MovieCard'
import FeaturedCast from '../cast/FeaturedCast'

export default class MovieDetails extends Component {
	render() {
		return (
			<div>
				<MovieCard id={this.props.match.params.id} />
				<FeaturedCast id={this.props.match.params.id} type='movie' />
			</div>
		)
	}
}

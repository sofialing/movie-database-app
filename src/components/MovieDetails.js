import React, { Component } from 'react'
import MovieCard from './MovieCard';
import FeaturedCast from './FeaturedCast';

export default class MovieDetails extends Component {

    render() {
        return (
            <div>
                <MovieCard id={this.props.match.params.movieId} />
                <FeaturedCast id={this.props.match.params.movieId} type="movie" />
            </div>
        )
    }
}

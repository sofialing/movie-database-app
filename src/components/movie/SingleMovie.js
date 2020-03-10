import React, { Component } from 'react'
import MovieCard from './MovieCard'
import FeaturedCast from '../cast/FeaturedCast'
import axios from 'axios'

export default class SingleMovie extends Component {
	componentDidMount() {
		this.getMovie()
	}

	getMovie = () => {
		const api_key = '7119aa69d9ede648d34b48fb09f84d2e'
		let { id } = this.props.match.params
		id = id.slice(0, id.indexOf('-'))

		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
			)
			.then(({ data }) => {
				this.setState({
					...this.formatData(data)
				})
			})
	}

	formatData = data => {
		console.log(data)
		return {
			id: data.id,
			title: data.title,
			overview: data.overview,
			poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
			details: [
				{
					type: 'Genres',
					info: data.genres.map(genre => genre.name).join(', ')
				},
				{
					type: 'Rating',
					info: `${data.vote_average}/10`
				},
				{
					type: 'Runtime',
					info:
						Math.floor(data.runtime / 60) +
						' hours ' +
						(data.runtime % 60) +
						' min '
				},
				{
					type: 'Language',
					info: data.spoken_languages.map(language => language.name).join(', ')
				},
				{
					type: 'Status',
					info: data.status
				},
				{
					type: 'Release date',
					info: data.release_date
				},
				{
					type: 'Budget',
					info: `$${data.budget.toLocaleString()}`
				}
			]
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.state ? (
					<React.Fragment>
						<MovieCard movie={this.state} />
						<FeaturedCast
							id={this.state.id}
							type='movie'
							location={this.props.location}
						/>
					</React.Fragment>
				) : (
					''
				)}
			</React.Fragment>
		)
	}
}

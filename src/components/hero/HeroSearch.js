import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'

export default class HeroSearch extends Component {
	constructor() {
		super()

		this.state = {
			id: '',
			title: '',
			value: '',
			suggestions: [],
			redirect: false
		}
	}

	getSuggestionValue = suggestion => suggestion.title
	// getSuggestionValue = suggestion => `${suggestion.title} (${suggestion.year})`;

	renderSuggestion = suggestion => (
		<div>
			<h3 className='h6 font-weight-bolder mb-0'>{suggestion.title}</h3>
			<p className='mb-0'>{suggestion.year}</p>
		</div>
	)

	renderInputComponent = inputProps => (
		<div className='input-group input-group-lg'>
			<input {...inputProps} />
			<div className='input-group-append'>
				<button className='btn btn-danger' type='submit'>
					<i className='fas fa-search'></i>
				</button>
			</div>
		</div>
	)

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		})
	}

	onSubmit = event => {
		event.preventDefault()

		if (this.state.id) {
			this.setState({ redirect: true })
		}
	}

	onSuggestionsFetchRequested = ({ value }) => {
		const trimmedValue = value.trim()
		const api_key = '7119aa69d9ede648d34b48fb09f84d2e'

		if (trimmedValue.length) {
			axios
				.get(
					`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${trimmedValue}&language=en-US&page=1&include_adult=false`
				)
				.then(({ data }) => {
					const result = data.results.map(movie => ({
						id: movie.id,
						title: movie.title,
						year: movie.release_date
							? movie.release_date.substring(0, 4)
							: 'Year not available'
					}))
					this.setState({ suggestions: result })
				})
				.catch(err => console.log(err))
		}
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		})
	}

	onSuggestionSelected = (event, { suggestion, method }) => {
		if (method === 'enter' || method === 'click') {
			this.setState({ id: suggestion.id })
		}
		if (method === 'enter') {
			this.setState({ redirect: true })
		}
		event.preventDefault()
	}

	slugify = str => {
		return str
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/[^\w\-]+/g, '') // Remove all non-word chars
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, '') // Trim - from end of text
	}

	render() {
		const { value, suggestions } = this.state

		const inputProps = {
			placeholder: 'Search for movies....',
			value,
			onChange: this.onChange
		}

		const theme = {
			container: 'form-group',
			input: 'form-control',
			suggestionsContainer: 'react-autosuggest__suggestions-container',
			suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
			suggestionsList: 'list-group list-group-flush',
			suggestion: 'list-group-item'
		}

		if (this.state.redirect) {
			const slug = this.slugify(this.state.value)
			return <Redirect to={`movies/${this.state.id}-${slug}`} />
		}

		return (
			<form id='hero-search' onSubmit={this.onSubmit}>
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					onSuggestionSelected={this.onSuggestionSelected}
					getSuggestionValue={this.getSuggestionValue}
					renderSuggestion={this.renderSuggestion}
					renderInputComponent={this.renderInputComponent}
					inputProps={inputProps}
					theme={theme}
					focusInputOnSuggestionClick={true}
				/>
			</form>
		)
	}
}
// return (
// 	<form id="hero-search" onSubmit={this.handleSubmit}>
// 		<div className="input-group input-group-lg">
// 			<input
// 				type="text"
// 				className="form-control"
// 				placeholder="Search for a movie, tv show or actor...."
// 				value={this.state.search}
// 				onChange={this.handleChange}
// 			/>
// 			<div className="input-group-append">
// 				<button className="btn btn-danger" type="submit">
// 					<i className="fas fa-search"></i>
// 				</button>
// 			</div>
// 		</div>
// 	</form>
// );

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class FullCast extends Component {
	state = {
		cast: [],
		crew: []
	}

	componentDidMount() {
		this.getCast()
	}

	getCast = () => {
		const api_key = '7119aa69d9ede648d34b48fb09f84d2e'
		const { id, type } = this.props.location.state

		axios
			.get(
				`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api_key}&language=en-US`
			)
			.then(({ data }) => {
				this.setState({
					cast: data.cast,
					crew: data.crew
				})
			})
	}

	render() {
		return <section className='container my-5'></section>
	}
}

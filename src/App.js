import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Start from './components/Start'
import Shows from './components/Shows'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import ShowDetails from './components/ShowDetails'

export default class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path='/' component={Start} />
					<Route exact path='/movies' component={Movies} />
					<Route path='/movies/:movieId' component={MovieDetails} />
					<Route exact path='/shows' component={Shows} />
					<Route path='/shows/:showId' component={ShowDetails} />
				</div>
			</BrowserRouter>
		);
	}
}

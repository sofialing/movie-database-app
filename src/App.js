import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Start from './components/pages/Start'
import Shows from './components/pages/Shows'
import Movies from './components/pages/Movies'
import MovieDetails from './components/movie/MovieDetails'
import ShowDetails from './components/show/ShowDetails'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Start} />
						<Route exact path='/movies' component={Movies} />
						<Route path='/movies/:id' component={MovieDetails} />
						<Route exact path='/shows' component={Shows} />
						<Route path='/shows/:id' component={ShowDetails} />
						<Redirect to='/' />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

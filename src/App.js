import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Start from './components/pages/Start';
import Footer from './components/pages/Footer';
import Shows from './components/pages/Shows';
import Movies from './components/pages/Movies';
import SingleMovie from './components/movie/SingleMovie';
import FullCast from './components/cast/FullCast';
import ShowDetails from './components/show/ShowDetails';

const App = () => {
	return (
		<Router>
			<main className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Start} />
					<Route exact path='/movies' component={Movies} />
					<Route exact path='/movie/:movieId' component={SingleMovie} />
					<Route path='/movies/:id/cast' component={FullCast} />
					<Route exact path='/shows' component={Shows} />
					<Route path='/shows/:id' component={ShowDetails} />
					<Redirect to='/' />
				</Switch>
			</main>
			<Footer />
		</Router>
	)
}

export default App;

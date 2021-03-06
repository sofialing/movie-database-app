import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/tmdb_logo.svg'

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg fixed-top'>
			<NavLink to='/' className='navbar-brand'>
				<img src={logo} height='45' alt='' />
			</NavLink>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<NavLink to='/movie' className='nav-link'>
							Movies
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/tv' className='nav-link'>
							TV Shows
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/' className='nav-link'>
							Discover
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/' className='nav-link'>
							<i className='fas fa-search'></i>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar

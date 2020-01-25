import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand">Movie Database</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shows" className="nav-link">Tv shows</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/discover" className="nav-link">Discover</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><i className="fas fa-search"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
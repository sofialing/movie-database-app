import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <NavLink to="/" className="navbar-brand">
                <img src={process.env.PUBLIC_URL + 'tmdb_logo.svg'} height="45" alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link"><i className="fas fa-search"></i></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
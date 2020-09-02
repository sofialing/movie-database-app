import React from 'react'
import logo from '../../assets/images/movie-db-logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-5">
                <img src={logo} height='105' alt='' />
            </div>
        </footer>
    );
}

export default Footer;
import React from 'react';
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='main-header'>
            <div className="brand">Watch-This</div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    {/* <li className="main-nav__item">
                        Recommended
                    </li> */}
                    {/* <Link to="/search" className="main-nav__item">Search</Link> */}
                    <Link to="/favorites" className="main-nav__item">Favorites</Link>
                    <Link to="/popular" className="main-nav__item">Trending</Link>
                    <Link to="/recommended" className="main-nav__item">Recommended</Link>
                </ul>
            </nav>

        </header>
    )
}

export default Header

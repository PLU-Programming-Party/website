import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

/* eslint-disable */
const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
        </nav>
      );
}

export default NavBar;
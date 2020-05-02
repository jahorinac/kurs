import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">React router</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName={styles.active} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName={styles.active}  className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar
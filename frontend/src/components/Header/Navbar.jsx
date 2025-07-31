import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { useEffect } from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top px-4 py-3">
            <div className="container-fluid">
                {/* Left: Brand */}
                <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
                    UTKARSH CLOTHING 
                </Link>

                {/* Toggle for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                {/* Right: Nav Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-2">
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/about">About</Link>
                        </li>

                        {/* Categories Dropdown */}
                        {/* <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-dark fw-medium"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/categories/tech">Coffee Mugs</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/fashion">Keychain</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/food"> Fridge Magnets</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/food"> Tea Coasters</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/contact">Contact</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-medium" to="/login">Login</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

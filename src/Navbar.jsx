import React from 'react';
import { NavLink } from 'react-router-dom';
import Navicon from './img/nav.png'
const Navbar = () => {

    const showNav = () => {
        return (
            <>

            </>
        )
    }

    return (
        <>
            <div className="main_Nav">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">


                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                    <NavLink className="navbar-brand" exact to="/">ASzEn</NavLink>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink className="nav-link active" aria-current="page" activeClassName="acNav" exact to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" activeClassName="acNav" exact to="/about">About</NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink className="nav-link" activeClassName="acNav" exact to="/service">Service</NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink className="nav-link" activeClassName="acNav" exact to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
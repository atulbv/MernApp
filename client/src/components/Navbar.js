import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import '../css/main.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="fa fa-line-chart"></i>
            Atul Technical
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link smoothScroll"
                  aria-current="page"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link smoothScroll" to="/About" exact>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link smoothScroll" to="/Contact" exact>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link smoothScroll" to="/Login" exact>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link smoothScroll" to="/Signup" exact>
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

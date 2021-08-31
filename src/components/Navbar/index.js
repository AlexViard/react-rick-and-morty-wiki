import React from 'react';

import logo from 'images/rick-and-morty-logo.png';
import { Link } from 'react-router-dom';

import './style.scss';

const NavBar = () => (
  <nav className="navbar">
      <ul className="navbar-list">
          <li className="navbar-list-link"><Link to="/characters">Personnages</Link></li>
          <li className="navbar-list-link"><Link to="/">Forum</Link></li>
          <li className="navbar-list-link img">
            <img src={logo} alt="" />
          </li>
          <li className="navbar-list-link"><Link to="/">Episodes</Link></li>
          <li className="navbar-list-link"><Link to="/">Connexion</Link></li>
      </ul>
  </nav>
);

export default NavBar;
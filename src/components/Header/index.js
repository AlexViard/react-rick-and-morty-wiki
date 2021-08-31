import React from 'react';
import NavBar from '../Navbar';
import './style.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    
    <div className="header-content">
    <div className="header-intro">
        <h1 className="header-intro-title">Rick and Morty Wiki</h1>
        <p className="header-intro-subtitle">Retrouve toutes les infos concernant ta serie favorite sur ce site !</p>
        <div className="header-intro-redirect">
          <a className="header-intro-redirect-btn-outline" href="/">Decouvrir</a>
          <a className="header-intro-redirect-btn" href="/">En savoir plus..</a>
        </div>
      </div>
      <div className="header-img">
        <img src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="" />
      </div>
    </div>
  </div>
);

export default Header;

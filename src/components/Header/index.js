import React from 'react';
import NavBar from '../Navbar';
import './style.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <div className="header-img">
      <img src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="" />
    </div>
  </div>
);

export default Header;

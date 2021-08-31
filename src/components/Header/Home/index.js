import React from 'react';
import fullCharacters from 'images/full-characters.png';
import episode from 'images/background-episode.jpeg';
import anatomyPark from 'images/anatomy-park.png';
import { Link } from 'react-router-dom';

import Dimension from 'components/Dimension';

import './style.scss';

const Home = () => (
  <div className="home">
      <div className="home-background"></div>

      <h1 className="home-title">Découvrir et explorer </h1>

      <div className="home-section">
        <div className="home-section-img" style={{backgroundImage: `url("${fullCharacters}")`}}>
        </div>
        <div className="home-section-text">
            <h2 className="home-section-text-title">Les personnages</h2>
            <p className="home-section-text-description">Les choses deviennent bizarres quand ces gars sont là.</p>
            <Link className="home-section-text-btn" to="/">Voir les personnages</Link>
        </div>
        
      </div>

      <div className="home-section">
        <div className="home-section-img" style={{backgroundImage: `url("${episode}")`}}>
        </div>
        <div className="home-section-text">
            <h2 className="home-section-text-title">Les episodes</h2>
            <p className="home-section-text-description">Les choses qui se passent dans ces épisodes sont dingues.</p>
            <Link className="home-section-text-btn" to="/">Voir les episodes</Link>
        </div>
        
      </div>

      <div className="home-section">
        <div className="home-section-img" style={{backgroundImage: `url("${anatomyPark}")`}}>
        </div>
        <div className="home-section-text">
            <h2 className="home-section-text-title">Les emplacements</h2>
            <p className="home-section-text-description">Des endroit vraiment spéciaux que vous n'auriez jamais pensé voir un jour.</p>
            <a className="home-section-text-btn" href="/">Voir les personnages</a>
        </div>
        
      </div>
      <Dimension />
  </div>
);

export default Home;

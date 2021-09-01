import React from 'react';
import test from 'images/104.jpeg';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({name, species, type, gender, origin, image, episode}) => (
  <div className="card">
    <div className="card-img" style={{backgroundImage: `url("${test}")`}}>
        {/* <img src={test} alt="" /> */}
    </div>
    <div className="card-info">
        <p className="card-info-name">Rick Sanchez</p>
        <p className="card-info-status"><span className="alive"></span>En vie</p>
        <p className="card-info-species">Humanoid</p>
        <p className="card-info-type">Lizard-Person</p>
        <p className="card-info-gender">Male</p>
        <p className="card-info-origin">Humanoid</p> 
        <p className="card-info-subtitle">Dernier lieu connu :</p>
        <p className="card-info-location">Citadel of Ricks</p>
        <p className="card-info-subtitle">Vu pour la première fois dans :</p>
        <p className="card-info-first-episode">Vindicators 3: Le retour de Worldender</p>

    </div>
  </div>
);

Card.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    image: PropTypes.string,
    episode: PropTypes.array,
};

Card.defaultProps = {
    name: '',
    species: '',
    type: '',
    gender: '',
    origin: '',
    image: '',
    episode: [],
};

export default Card;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from 'api';

import './style.scss';

const Card = ({ name, status, species, type, gender, origin, location, image, episode }) => {

    const [firstEpisode, setFirstEpisode] = useState({
        name: '',
    });

    useEffect(() => {
        const getNameFirstEpisode = async (episode) => {
            try {
                const response = await api.get(episode);
                console.log(response);
                setFirstEpisode({
                    name: response.data.name,
                });
            } catch (err) {
                console.log(err);
            }
        };

        getNameFirstEpisode(episode[0]);
        // eslint-disable-next-line
    }, []);


    return (
        <div className="card">
            <div className="card-img" style={{backgroundImage: `url("${image}")`}}>
                {/* <img src={test} alt="" /> */}
            </div>
            <div className="card-info">
                <p className="card-info-name">{name}</p>
                {
                    status === 'Alive'
                    ? <p className="card-info-status"><span className="alive"></span>En vie</p>
                    : <p className="card-info-status"><span className="dead"></span>Mort</p>
                }
                <p className="card-info-species">{species}</p>
                <p className="card-info-type">{type}</p>
                <p className="card-info-gender">{gender}</p>
                <p className="card-info-origin">{origin.name}</p> 
                <p className="card-info-subtitle">Dernier lieu connu :</p>
                <p className="card-info-location">{location.name}</p>
                <p className="card-info-subtitle">Vu pour la première fois dans :</p>
                <p className="card-info-first-episode">{firstEpisode.name}</p>

            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.object,
    location: PropTypes.object,
    image: PropTypes.string,
    episode: PropTypes.array,
};

Card.defaultProps = {
    name: '',
    species: '',
    type: '',
    gender: '',
    origin: {},
    location: {},
    image: '',
    episode: [],
};

export default Card;

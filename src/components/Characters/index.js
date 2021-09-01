import React, { useEffect, useState } from 'react';
import api from 'api';
import NavBar from 'components/NavBar';
import Card from 'components/Card';
// import SearchBar from 'components/SearchBar';
import './style.scss';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const fetchCharacters = async () => {
        const response = await api.get('/character');
        // console.log(response.data.results);
        setCharacters(response.data.results);        
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div className="characters">
            <NavBar />
            {/* <SearchBar /> */}

            {characters.map((elem) => (
                <Card {...elem} />
            ))}          

            
        </div>
    )
}

export default Characters;

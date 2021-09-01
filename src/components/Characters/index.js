import React, { useEffect, useState } from 'react';
import api from 'api';
import NavBar from 'components/NavBar';
import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import './style.scss';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const fetchCharacters = async () => {
        try {
            const { data } = await api.get('/character');
            const nbrPage = data.info.pages;
            let tab = [];

            for (let i = 1; nbrPage > i; i++) {
                const response = await api.get(`/character/?page=${i}`);
                tab = tab.concat(response.data.results);
                setCharacters(tab);
            }; 
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const getFilterCharacters = () => (
        characters.filter((elem) => (
            elem.name.toLowerCase().includes(inputValue.toLowerCase())
        ))
    );

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div className="characters">
            <NavBar />
            <SearchBar type={'personnage'} inputValue={inputValue} handleChange={handleChangeInputValue} />
            <div className="characters-list">
            {getFilterCharacters().map((elem) => (
                <Card {...elem} />
            ))} 
            </div>
        </div>
    )
}

export default Characters;

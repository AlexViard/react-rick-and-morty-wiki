import React from 'react';
import PropTypes from 'prop-types';
import {
    VscSearch
} from 'react-icons/vsc';

import './style.scss';

const SearchBar = ({ type, inputValue, handleChange }) => {
    
    return (
        <div className="searchbar">
            <input type="text" placeholder={`Rechercher un ${type}...`} value={inputValue} onChange={handleChange} />
            <VscSearch className="searchbar-icon" />
        </div>
    );
};

SearchBar.propTypes = {
    type: PropTypes.string.isRequired,
};

export default SearchBar;

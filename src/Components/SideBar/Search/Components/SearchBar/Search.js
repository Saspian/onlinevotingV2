import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const SearchBar = ({ search, getSearch, updateSearch }) => {
  return (
    <div className="searchBar">
      <form onSubmit={getSearch}>
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="search"
          required="required"
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.string,
  getSearch: PropTypes.func,
  updateSearch: PropTypes.func
};

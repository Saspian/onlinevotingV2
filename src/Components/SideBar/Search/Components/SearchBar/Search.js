import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const SearchBar = ({ search, getSearch, updateSearch }) => {
  return (
    <div className="searchBar">
      <form onSubmit={getSearch}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="search"
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.object,
  getSearch: PropTypes.func,
  updateSearch: PropTypes.func
};

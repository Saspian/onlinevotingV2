import React from 'react';
import Categories from './Categories';
import Search from './Search';
import './Sidebar.css';

export default () => {
  return (
    <div className="sidebar">
      <Search />
      <Categories />
    </div>
  );
};

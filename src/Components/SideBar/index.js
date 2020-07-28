import React from 'react';
import Categories from './Categories';
import AboutCollege from './AboutPrime';
import './Sidebar.css';

export default () => {
  return (
    <div className="sidebar">
      <Categories />
      <br />
      <hr />
      <AboutCollege />
    </div>
  );
};

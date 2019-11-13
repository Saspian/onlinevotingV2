import React from 'react';
import './Categories.css';

export default () => {
  return (
    <div className="cat">
      <h1>Categories</h1>
      <div className="cat-list">
        <button>Architecture</button>
        <button>Mobile and Apps</button>
        <button>Technologies</button>
        <button>Web & Interaction</button>
        <button>Games & Entertainment</button>
      </div>
    </div>
  );
};

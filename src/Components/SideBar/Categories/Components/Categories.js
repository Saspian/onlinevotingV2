import React from 'react';
import './Categories.css';

export default () => {
  return (
    <div className="cat">
      <h1>Categories</h1>
      <div className="cat-list">
        <button>Architecture</button>
        <button>Technology</button>
        <button>Health</button>
        <button>Environment</button>
        <button>Economy</button>
        <button>Games & Entertainment</button>
        <button>Arts and Music</button>
      </div>
    </div>
  );
};

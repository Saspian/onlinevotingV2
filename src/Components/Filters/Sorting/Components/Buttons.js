import React from 'react';
import './Buttons.css';

export default () => {
  return (
    <div className="filter-line">
      <span>Sort by:</span>
      <select className="sort1">
        <option>Recently added</option>
        <option>Popular</option>
      </select>
      <select className="sort2">
        <option>Any time</option>
        <option>Past hour</option>
        <option>Past 24 hour</option>
        <option>Past week</option>
        <option>Past month</option>
        <option>Past year</option>
        <option>Custom range</option>
      </select>
      <hr />
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import './SearchedView.css';

const SearchedView = ({ id, title, vid, des, sub, org }) => {
  return (
    <div className="searched-result">
      <div className="video">
        <iframe
          className="iframe bigger"
          src={`https://www.youtube.com/embed/${vid}?controls=0`}
          frameBorder="0"
        />
      </div>
      <div className="otherinfo">
        <Link to={`/project/${id}`} className="link">
          <h6>{title}</h6>
        </Link>

        <p>
          <span>
            <i className="fas fa-user"></i>
            {sub}
          </span>
          <span>
            <i className="fas fa-clock"></i>30-10-2019
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i className="fas fa-globe-asia"></i>By {org}
          </span>
        </p>
        <p className="desc">{des}</p>
      </div>
    </div>
  );
};

export default SearchedView;

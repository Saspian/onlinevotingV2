import React from 'react';
import PropTypes from 'prop-types';
import './Projects-view.css';
import { Link } from 'react-router-dom';

const Projectview = ({ id, title, vid, des, sub, org, time }) => {
  return (
    <div className="project-view">
      <div className="video">
        <iframe
          className="iframe bigger"
          src={`https://www.youtube.com/embed/${vid}?controls=0`}
          frameBorder="0"
        />
      </div>

      <Link to={`/project/${id}`} className="link">
        <h6>{title}</h6>
      </Link>

      <p>
        <span>
          <i className="fas fa-user"></i>
          {sub}
        </span>
        <span>
          <i className="fas fa-clock"></i>
          {time.substr(0, 10)}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <i className="fas fa-globe-asia"></i>By {org}
        </span>
      </p>
      <p className="desc">{des.substr(0, 250)} ...</p>
    </div>
  );
};

export default Projectview;

Projectview.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  vid: PropTypes.string,
  des: PropTypes.string,
  sub: PropTypes.string,
  org: PropTypes.string,
  time: PropTypes.string
};

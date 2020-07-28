import React from 'react';
import PropTypes from 'prop-types';
import '../Projects-view/Components/Projects-view.css';
import './ProjectFullView.css';

const Projectview = ({ title, vid, des, sub, org, time, url, updateVote }) => {
  return (
    <div className="project-full-view">
      <div className="video">
        <iframe
          className="iframe bigger"
          src={`https://www.youtube.com/embed/${vid}?controls=0`}
          frameBorder="0"
        />
      </div>
      <h6>{title}</h6>
      <p>
        <span>
          <i className="fas fa-user"></i>
          {sub}
        </span>
        <span>
          <i className="fas fa-clock"></i>
          {time ? time.substr(0, 10) : 'null'}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <i className="fas fa-globe-asia"></i>By {org}
        </span>
      </p>
      <br />
      Project URL :{' '}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <p className="desc">{des}</p>
      <button className="votingBtn" onClick={updateVote}>
        Vote now
      </button>
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
  time: PropTypes.string,
  url: PropTypes.string,
  updateVote: PropTypes.string
};

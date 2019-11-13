import React from 'react';
import './Jumbotron.css';

export default () => {
  return (
    <div className="jumbo-container">
      <div className="title">
        <h1>Project Demonstration</h1>
        <p>
          Submit your projects or projects ideas related to the theme of ICT
          Meetup v6.0 <br />
          <span>‘Advancing towards smart city for suitable development’ </span>
          and win exciting prizes. 10 projects with highest vote will be able to
          pitch there ideas on the event day.
        </p>
      </div>
      <div className="fade"></div>
      <img src="images/845.jpg" alt="jumbotron image" />
    </div>
  );
};

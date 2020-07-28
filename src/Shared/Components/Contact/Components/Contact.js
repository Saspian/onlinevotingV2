import React from 'react';
import './Contact.css';

export default () => {
  return (
    <div className="contact">
      <h1>Location</h1>
      <hr />
      <br />
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0081599631967!2d85.30048641453851!3d27.71703433167423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18effb3aaaab%3A0x19e7e882bc9b29cf!2sPrime%20College%20Bachelors%20Building!5e0!3m2!1sen!2snp!4v1573903079854!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameBorder="0"
        ></iframe>
        <p>
          <h1>Prime College</h1>
          <i className="fas fa-map-marker-alt"></i>Khusibu, Naya Bazar,
          Kathmandu, Nepal <br /> <br />
          <i className="far fa-envelope"></i>itclub@prime.edu.np <br />
          <i className="fas fa-phone"></i>9843463923 <br />
          <i className="fas fa-phone"></i>9861549710
        </p>
      </div>
    </div>
  );
};

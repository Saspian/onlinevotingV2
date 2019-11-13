import React from 'react';
import propTypes from 'prop-types';
import './Content.css';

const Content = ({ children }) => {
  return <div className="content">{children}</div>;
};
export default Content;

Content.propTypes = {
  children: propTypes.array
};

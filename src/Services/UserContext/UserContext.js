import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = props => {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    repassword: ''
  });

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.array
};

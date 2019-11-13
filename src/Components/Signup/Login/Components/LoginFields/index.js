import React, { useState } from 'react';
import axios from 'axios';
import Loginfields from './Loginfields';

export const LoginController = () => {
  const [users, setUsers] = useState({
    email: '',
    password: ''
  });

  const changeHandler3 = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const checkUser = e => {
    e.preventDefault();
    console.log(users);
    axios
      .post('http://localhost:3001/api/user/login', users)
      .then(response => {
        console.log(response);
        console.log('logged in');
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('loggedUserID', response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <Loginfields changeHandler3={changeHandler3} checkUser={checkUser} />
    </div>
  );
};

export default LoginController;

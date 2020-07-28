import React, { useState } from 'react';
import axios from 'axios';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';
import Loginfields from './Loginfields';

export const LoginController = () => {
  // NOTY NOTIFICATION
  const showNotification = () => {
    new Noty({
      type: 'success',
      theme: 'mint',
      layout: 'topRight',
      text: 'Login sucessfull',
      timeout: 3000
    }).show();
  };
  const [users, setUsers] = useState({
    email: '',
    password: ''
  });

  const changeHandler3 = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const checkUser = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/api/user/login', users)
      .then(response => {
        console.log(response);
        console.log('logged in');
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('loggedUserID', response.data.id);

        if (
          response.data.emailStatus &&
          response.data.emailStatus !== 'undefined'
        ) {
          document.getElementById('forLoginError').textContent =
            response.data.emailStatus;
        }
        if (
          response.data.pwdStatus &&
          response.data.pwdStatus !== 'undefined'
        ) {
          document.getElementById('forLoginError2').textContent =
            response.data.pwdStatus;
        }
        if (
          (localStorage.getItem('username') &&
            localStorage.getItem('token')) !== 'undefined'
        ) {
          console.log('Login sucessfully');
          showNotification();
          window.location.href = '/';
        }
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

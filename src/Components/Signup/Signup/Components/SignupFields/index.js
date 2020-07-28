import React, { useContext } from 'react';
import axios from 'axios';
import Signupfields from './Signupfields';
import { UserContext } from '../../../../../Services/UserContext/UserContext';

export const SignupController = () => {
  const [users, setUsers] = useContext(UserContext);

  const changeHandler2 = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(users);

    // VALIDATION FORM FRONTEND

    if (users.name.length < 4) {
      document.getElementById('name').style.border = '1px solid';
      document.getElementById('name').style.borderColor = 'red';
      document.getElementById('forSignupError').textContent =
        ' * username should be longer than 6 letter';
    } else if (users.email.indexOf('@') < 0) {
      document.getElementById('email').style.border = '1px solid';
      document.getElementById('email').style.borderColor = 'red';
      document.getElementById('forSignupError2').textContent =
        ' *Please enter a valid email';
    } else if ((users.password.length || users.repassword.length) < 6) {
      document.getElementById('psw').style.border = '1px solid';
      document.getElementById('psw').style.borderColor = 'red';
      document.getElementById('forSignupError3').textContent =
        ' *password should be longer than 6 letter';
    } else {
      axios
        .post('http://localhost:3001/api/user/register', users)
        .then(response => {
          console.log(response);
          console.log('User added sucessfully');
          setUsers({
            name: '',
            email: '',
            password: '',
            repassword: ''
          });
          // eslint-disable-next-line no-alert
          alert('user added sucessfully');
          window.location = '/';
        })
        .catch(error => {
          console.log(error, '@@eeee');
          if (error.response.data.emailError) {
            document.getElementById('email').style.border = '1px solid';
            document.getElementById('email').style.borderColor = 'red';
            document.getElementById('forSignupError2').textContent =
              error.response.data.emailError;
          }
          if (error.response.data.pwdError) {
            document.getElementById('psw').style.border = '1px solid';
            document.getElementById('psw').style.borderColor = 'red';
            document.getElementById('repsw').style.border = '1px solid';
            document.getElementById('repsw').style.borderColor = 'red';
            document.getElementById('forSignupError4').textContent =
              error.response.data.pwdError;
          }
          console.log(error.response);
        });
    }
  };

  return (
    <div>
      <Signupfields
        changeHandler2={changeHandler2}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default SignupController;

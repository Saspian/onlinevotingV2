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
    console.log('sucessfully sent for signup data');
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
      })
      .catch(err => console.log(err));
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

import React, { useContext } from 'react';
import axios from 'axios';
import Projectform from './Projectform';
import { ProjectContext } from '../../../Services/Project-holder/ProjectContext';

export const Controller = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const changeHandler = e => {
    setProjects({ ...projects, [e.target.name]: e.target.value });
  };
  const submitProject = e => {
    e.preventDefault();
    console.log(projects);
    // VALIDATION OF PROJECT SUBMITTING FORM
    if (projects.pName.length < 6) {
      document.getElementById('name').style.border = '1px solid red';
      document.getElementById('pNameError').textContent =
        ' *Project name should be longer than 6 letter  ';
    } else if (projects.pDesc.length < 50) {
      document.getElementById('desc').style.borderColor = 'red';
      document.getElementById('pDescError').textContent =
        ' *Project description should be longer than 50 words  ';
    } else if (projects.cat === '') {
      document.getElementById('cat').style.borderColor = 'red';
      document.getElementById('selectError').textContent =
        ' *Please select a category  ';
    } else if (
      !(projects.vDemo.includes('youtu') || projects.vDemo.includes('y2u'))
    ) {
      document.getElementById('demo').style.borderColor = 'red';
      document.getElementById('vidLinkError').textContent =
        ' *Please enter valid youtube video link  ';
    } else if (projects.cName.length < 6) {
      document.getElementById('cname').style.borderColor = 'red';
      document.getElementById('cNameError').textContent =
        ' *Name should be longer than 6 letter  ';
    } else if (projects.submittedBy.length < 6) {
      document.getElementById('subby').style.borderColor = 'red';
      document.getElementById('subByError').textContent =
        ' *Name should be longer than 6 letter  ';
    } else if (projects.pemail.indexOf('@') < 0) {
      document.getElementById('pEmail').style.borderColor = 'red';
      document.getElementById('emailError').textContent =
        ' *Please enter a valid email  ';
    } else {
      axios
        .post(
          'http://localhost:3001/api/participants/registerparticipants',
          projects
        )
        .then(response => {
          console.log(response);
          console.log('project added sucessfully');
          setProjects({
            ...projects,
            pName: '',
            purl: '',
            pDesc: '',
            cat: '',
            vDemo: '',
            cName: '',
            submittedBy: '',
            pemail: ''
          });
          // eslint-disable-next-line no-alert
          alert('Project added Successfully');
          window.location = '/';
          return response;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    }
  };
  const resetBtn = e => {
    e.preventDefault();
    console.log('reset button is clicked', '@@reset');
    setProjects({
      ...projects,
      pName: '',
      purl: '',
      pDesc: '',
      cat: '',
      vDemo: '',
      cName: '',
      submittedBy: '',
      pemail: ''
    });
    console.log('reset button is clicked down too', '@@reset');
  };

  return (
    <div>
      <Projectform
        changeHandler3={changeHandler}
        submitProject={submitProject}
        resetBtn={resetBtn}
      />
    </div>
  );
};
export default Controller;

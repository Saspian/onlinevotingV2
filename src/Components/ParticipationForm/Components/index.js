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
    console.log(
      'sucessfully clicked the button, ill be happy if this works at once',
      '@@filter'
    );
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
          pDesc: '',
          vDemo: '',
          cName: '',
          submittedBy: '',
          pemail: ''
        });
        // eslint-disable-next-line no-alert
        alert('Project added Successfully');
        return response;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  return (
    <div>
      <Projectform
        changeHandler3={changeHandler}
        submitProject={submitProject}
      />
    </div>
  );
};
export default Controller;

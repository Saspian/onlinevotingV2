import { useContext } from 'react';
import axios from 'axios';
import { ProjectContext } from '../Components/ProjectContext';

const PostData = () => {
  const [projects, setProjects] = useContext(ProjectContext);
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

export default PostData;

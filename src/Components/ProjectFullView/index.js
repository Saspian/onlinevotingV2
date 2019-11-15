import React, { useState, useEffect } from 'react';
import getVideoId from 'get-video-id';
import PropTypes from 'prop-types';
import ProjectFullViews from './ProjectFullView';

const ProjectController = ({ match }) => {
  useEffect(() => {
    getProjects();
  }, []);
  const [projs, setProjs] = useState([]);

  const getProjects = async () => {
    try {
      const getProject = await fetch(
        `http://localhost:3001/api/participants/registeredparticipants/${match.params.id}`
      );
      const data = await getProject.json();
      setProjs(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(projs, '@@');
  console.log(projs.vDemo, 'videoid');

  return (
    <div>
      <ProjectFullViews
        key={projs._id}
        id={projs._id}
        title={projs.pName}
        vid={
          projs && projs.vDemo && projs.vDemo.length
            ? getVideoId(projs.vDemo).id
            : ''
        }
        des={projs.pDesc}
        sub={projs.submittedBy}
        org={projs.cName}
      />
    </div>
  );
};

export default ProjectController;

ProjectController.propTypes = {
  match: PropTypes.string
};

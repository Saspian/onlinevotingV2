import React, { useState, useEffect } from 'react';
import Projectsview from './Projects-view';

const getVideoId = require('get-video-id');

const ProjectsController = () => {
  const [proj, setProj] = useState([]);

  const getProjects = async () => {
    try {
      const getProject = await fetch(
        `http://localhost:3001/api/participants/registeredparticipants`
      );
      const data = await getProject.json();
      setProj(data);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  console.log(proj, '@@');
  return (
    <div className="leftbar">
      {proj.map(project => (
        <Projectsview
          key={project._id}
          id={project._id}
          title={project.pName}
          vid={getVideoId(project.vDemo).id}
          des={project.pDesc}
          sub={project.submittedBy}
          org={project.cName}
        />
      ))}
    </div>
  );
};

export default ProjectsController;

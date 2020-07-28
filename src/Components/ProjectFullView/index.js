import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Noty from 'noty';
import getVideoId from 'get-video-id';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';
import PropTypes from 'prop-types';
import ProjectFullViews from './ProjectFullView';

const ProjectController = ({ match }) => {
  const [projs, setProjs] = useState([]);

  // NOTIFICATION
  const showVoted = () => {
    new Noty({
      type: 'information',
      theme: 'mint',
      layout: 'center',
      text: 'Thank you for Voting!',
      timeout: 3000
    }).show();
  };
  const showAlreadyVoted = () => {
    let n = new Noty({
      type: 'information',
      theme: 'mint',
      layout: 'center',
      text: 'You have already voted for this project!',
      timeout: 3000
    }).show();
  };

  // DISPLAYING SELECTED PROJECTS DETAIL
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

  // CASTING VOTE
  const voterID = localStorage.getItem('loggedUserID');
  const data = { vCounter: voterID };
  const updateVote = () => {
    try {
      axios
        .post(
          `http://localhost:3001/api/participants/registeredparticipants/${match.params.id}`,
          data
        )
        .then(response => {
          console.log(response);
          const successMessage = response.data.message2;
          const errMessage = response.data.message1;
          if (errMessage) {
            showAlreadyVoted();
          }
          if (successMessage) {
            showVoted();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
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
        time={projs.createdAt}
        url={projs.purl}
        updateVote={updateVote}
      />
    </div>
  );
};

export default ProjectController;

ProjectController.propTypes = {
  match: PropTypes.string
};

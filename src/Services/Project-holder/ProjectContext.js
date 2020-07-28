import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ProjectContext = createContext();

export const ProjectProvider = props => {
  const [projects, setProjects] = useState({
    pName: '',
    purl: '',
    pDesc: '',
    cat: '',
    vDemo: '',
    cName: '',
    submittedBy: '',
    pemail: ''
  });

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.object
};

import React, { useState, useEffect } from 'react';
import Projectsview from './Projects-view';
import SearchBar from '../../SideBar/Search/Components/SearchBar/Search';

const getVideoId = require('get-video-id');

const ProjectsController = () => {
  const [proj, setProj] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const getProjects = async () => {
    try {
      const getProject = await fetch(
        `http://localhost:3001/api/participants/registeredparticipants?q=${query}`
      );
      const data = await getProject.json();
      setProj(data);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    console.log('searched intialized');
    setQuery(search.replace(/ /g, '+'));
    setSearch('');
  };

  useEffect(() => {
    getProjects();
  }, [query]);

  console.log(proj, '@@');
  return (
    <div className="leftbar">
      <SearchBar
        updateSearch={updateSearch}
        getSearch={getSearch}
        search={search}
      />
      {proj.map(project => (
        <Projectsview
          key={project._id}
          id={project._id}
          title={project.pName}
          vid={getVideoId(project.vDemo).id}
          des={project.pDesc}
          sub={project.submittedBy}
          org={project.cName}
          time={project.createdAt}
        />
      ))}
    </div>
  );
};

export default ProjectsController;

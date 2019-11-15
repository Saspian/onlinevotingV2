import React, { useState, useEffect } from 'react';
import getVideoId from 'get-video-id';
import SearchBar from './Search';
import Projectview from '../../../../Projects-view/Components/Projects-view';

const Search = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getProject();
  }, [query]);

  const getProject = async () => {
    const response = await fetch(
      `http://localhost:3001/api/participants/search?q=${query}`
    );
    const data = await response.json();
    console.log(data);
    setProjects(data);
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
  console.log(`searched item ${query}`, 'query');

  return (
    <div>
      <SearchBar
        updateSearch={updateSearch}
        getSearch={getSearch}
        search={search}
      />
      {projects.map(project => (
        <Projectview
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

export default Search;

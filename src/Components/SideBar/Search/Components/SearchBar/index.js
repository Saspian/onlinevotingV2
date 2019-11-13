import React, { useState, useEffect } from 'react';
import getVideoId from 'get-video-id';
import SearchBar from './Search';
import Projectviews from '../../../../Projects-view';

const Search = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('mushroom soup');

  useEffect(() => {
    //   getProjects();
  });

  const getProjects = async () => {
    const response = await fetch(
      `http://localhost:3001/api/participants/search?q=${query}`
    );
    const data = await response.json();
    console.log(data.hits);
    setProjects(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div>
      <SearchBar
        updateSearch={updateSearch}
        getSearch={getSearch}
        search={search}
      />
      {projects.map(project => (
        <Projectviews
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

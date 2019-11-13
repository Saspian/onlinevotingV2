import { useContext } from 'react';
import { ProjectContext } from '../../Project-holder/ProjectContext';

const GetData = () => {
  const [setProjects] = useContext(ProjectContext);

  const getData = async () => {
    const getData = await fetch(
      `http://localhost:3001/api/participants/registeredparticipants`
    );
    const data = await getData.json();
    setProjects(data);
  };
};

export default GetData;

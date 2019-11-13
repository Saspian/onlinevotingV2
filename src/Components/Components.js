import React from 'react';

//  COMPONENTS
import Filters from './Filters';
import Sidebar from './SideBar';
import Login from './Signup/Login';
import Signup from './Signup/Signup';
import ProjectsView from './Projects-view';

//  SHARED COMPONENTS
import Jumbo from '../Shared/Components/Layout/Header/Jumbotron';
import Content from '../Shared/Components/Layout/Content/Content';

//  STATE MANAGEMENT CONTEXT
import { UserProvider } from '../Services/UserContext/UserContext';

function Components() {
  return (
    <div className="Components">
      <UserProvider>
        <Jumbo />
        <Login />
        <Signup />
        <Filters />
        <Content>
          <ProjectsView />
          <Sidebar />
        </Content>
      </UserProvider>
    </div>
  );
}

export default Components;

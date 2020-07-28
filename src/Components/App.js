import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import './App.css';
// import component from './Components';
import Filters from './Filters';
import Sidebar from './SideBar';
import Login from './Signup/Login';
import Signup from './Signup/Signup';
import form from './ParticipationForm';
import Projectfull from './ProjectFullView';
import ProjectsView from './Projects-view';
// import SearchResult from './SearchedView';

//  SHARED COMPONENTS
import Navbar from '../Shared/Components/Layout/Header/Navbar';
import Jumbo from '../Shared/Components/Layout/Header/Jumbotron';
import Content from '../Shared/Components/Layout/Content/Content';
import Footer from '../Shared/Components/Layout/Footer';

// STATIC COMPONENTS
import About from '../Shared/Components/About';
import Contact from '../Shared/Components/Contact';
import FAQ from '../Shared/Components/FAQ';
import Alert from '../Shared/Components/Alert/Alert';

//  STATE MANAGEMENT CONTEXT
import { ProjectProvider } from '../Services/Project-holder/ProjectContext';
import { UserProvider } from '../Services/UserContext/UserContext';

function App() {
  return (
    <ProjectProvider>
      <div className="App">
        <Router>
          <Navbar />
          <UserProvider>
            <Route path="/" exact component={Jumbo} />
            <Login />
            <Signup />
            <Route path="/" exact component={Filters} />
            {/* <Route path="/" component={Alert} /> */}
            <Content>
              <Route path="/" exact component={ProjectsView} />
              {/* <Route path="/searchresult" exact component={SearchResult} /> */}
              <Route path="/" exact component={Sidebar} />
            </Content>
          </UserProvider>
          <Route
            path="/project/:id"
            exact
            render={({ match }) =>
              localStorage.getItem('token') ? (
                <Projectfull match={match} />
              ) : (
                <Alert />
              )
            }
          />
          <Route path="/submitproject" exact component={form} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/faq" exact component={FAQ} />
          <Footer />
        </Router>
      </div>
    </ProjectProvider>
  );
}

export default App;

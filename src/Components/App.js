import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import './App.css';
import component from './Components';
import form from './ParticipationForm';
import projectfull from './ProjectFullView';

//  SHARED COMPONENTS
import Navbar from '../Shared/Components/Layout/Header/Navbar';
import Footer from '../Shared/Components/Layout/Footer';

//  STATE MANAGEMENT CONTEXT
import { ProjectProvider } from '../Services/Project-holder/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/project/:id" component={projectfull} />
          <Route path="/" exact component={component} />
          <Route path="/submitproject" exact component={form} />
          <Footer />
        </Router>
      </div>
    </ProjectProvider>
  );
}

export default App;

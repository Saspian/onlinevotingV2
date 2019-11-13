import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Projectform.css';
import { ProjectContext } from '../../../Services/Project-holder/ProjectContext';

const ProjectForm = ({ changeHandler3, submitProject }) => {
  const projects = useContext(ProjectContext);
  return (
    <div className="form-container">
      <h1>Project Demonstration</h1>
      <hr />

      <div className="form">
        <form onSubmit={submitProject}>
          <label>Project Name*</label>
          <input
            type="text"
            id="name"
            name="pName"
            value={projects.pName}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <br />
          <label>URL</label>
          <input type="text" />
          <br />
          <br />
          <label>Project Description*</label>
          <textarea
            name="pDesc"
            id="desc"
            rows="4"
            cols="43"
            value={projects.pDesc}
            onChange={changeHandler3}
            required="required"
          ></textarea>{' '}
          <br />
          <br />
          <label>Demo* (Youtube)</label>
          <input
            type="text"
            id="demo"
            name="vDemo"
            value={projects.vDemo}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <br />
          <label>College Name</label>
          <input
            type="text"
            id="cname"
            name="cName"
            value={projects.cName}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <br />
          <label>Sumbited by</label>
          <input
            type="text"
            id="subby"
            name="submittedBy"
            value={projects.submittedBy}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <br />
          <label>Email</label>
          <input
            type="text"
            id="pEmail"
            name="pemail"
            value={projects.pemail}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

ProjectForm.propTypes = {
  changeHandler3: PropTypes.func,
  submitProject: PropTypes.func
};

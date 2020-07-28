import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Projectform.css';
import { ProjectContext } from '../../../Services/Project-holder/ProjectContext';

const ProjectForm = ({ changeHandler3, submitProject }) => {
  const projects = useContext(ProjectContext);
  const errorTextColor = {
    color: 'red'
  };
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
          <span id="pNameError" style={errorTextColor}></span>
          <br />
          <label>URL</label>
          <input
            type="text"
            id="url"
            name="purl"
            value={projects.purl}
            onChange={changeHandler3}
          />
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
          ></textarea>
          <br />
          <span id="pDescError" style={errorTextColor}></span>
          <br />
          <label>Categoties*</label>
          <select
            name="cat"
            id="cat"
            onChange={changeHandler3}
            required="required"
          >
            <option value="" defaultValue={projects.cat}>
              --Select Categories--
            </option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Environment">Environment</option>
            <option value="Economy">Economy</option>
            <option value="Entertainment">Games and Entertainment</option>
            <option value="Architecture">Architecture</option>
            <option value="Arts">Arts and Music</option>
          </select>
          <br />
          <span id="selectError" style={errorTextColor}></span>
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
          <span id="vidLinkError" style={errorTextColor}></span>
          <br />
          <label>College Name*</label>
          <input
            type="text"
            id="cname"
            name="cName"
            value={projects.cName}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <span id="cNameError" style={errorTextColor}></span>
          <br />
          <label>Sumbitted by*</label>
          <input
            type="text"
            id="subby"
            name="submittedBy"
            value={projects.submittedBy}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <span id="subByError" style={errorTextColor}></span>
          <br />
          <label>Email*</label>
          <input
            type="text"
            id="pEmail"
            name="pemail"
            value={projects.pemail}
            onChange={changeHandler3}
            required="required"
          />
          <br />
          <span id="emailError" style={errorTextColor}></span>
          <br />
          <button type="submit">Submit</button>
          {/* <button onClick={resetBtn}>Reset</button> */}
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

ProjectForm.propTypes = {
  changeHandler3: PropTypes.func,
  submitProject: PropTypes.func
  // resetBtn: PropTypes.func
};

import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [formInput, setFormInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    position: "",
    speciality: "",
    affiliation: "",
    research_interest: "",
    experience: "",
    publications: "",
    awards: "",
    personal_statement: "",
  });

  const formInputHandler = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div className="name">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter First Name"
              onChange={(event) => formInputHandler(event)}
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Last Name"
              onChange={(event) => formInputHandler(event)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            onChange={(event) => formInputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) => formInputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Current Position</label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={(event) => formInputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="speciality">Primary Specialty</label>
          <input
            type="text"
            name="speciality"
            id="speciality"
            onChange={(event) => formInputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="affiliation">Institution Affiliation</label>
          <input
            type="text"
            name="affiliation"
            id="affiliation"
            onChange={(event) => formInputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="research_interest">Area of Research Interest</label>
          <textarea
            id="research_interest"
            name="research_interest"
            rows="10"
            cols="50"
            onChange={(event) => formInputHandler(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Research Experience</label>
          <textarea
            id="experience"
            name="experience"
            rows="10"
            cols="50"
            onChange={(event) => formInputHandler(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="publications">Publications</label>
          <textarea
            id="publications"
            name="publications"
            rows="10"
            cols="50"
            onChange={(event) => formInputHandler(event)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="awards">Awards</label>
          <textarea
            id="awards"
            name="awards"
            rows="10"
            cols="50"
            onChange={(event) => formInputHandler(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="personal_statement">
            Personal Statement (limit 1 page): Please include your primary
            research interests and explain how this training will advance your
            short, medium, and long-term career goals
          </label>
          <textarea
            id="personal_statement"
            name="personal_statement"
            rows="10"
            cols="50"
            onChange={(event) => formInputHandler(event)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">
            A letter of reference from your Head of Department
          </label>

          <div>
            <input type="file" id="file" name="file" />
          </div>
        </div>
        <button
          className="btn"
          disabled={true}
          onClick={(event) => formSubmitHandler(event)}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

import React from "react";
import "./FormField.scss";
import { Outlet } from "react-router";

const FormField = () => {
  return (
    <>
      <div className="section_cover">
        <div className="section_cover_bgImg">
          <img
            src="https://argo-research.org/wp-content/uploads/2020/10/IMG_3353-scaled.jpg"
            alt="Argo-research"
            width="100%"
          />
        </div>
        <div className="section_cover_text">
          <div className="container">
            <h1>Form Entries</h1>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default FormField;

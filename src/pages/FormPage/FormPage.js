import React from "react";
import "./FormPage.scss";
import Form from "../../components/Form/Form";

const FormPage = () => {
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
            <h1>ARGO ACADEMY SCHOLARs 2021-2022-APPLICATION</h1>
          </div>
        </div>
      </div>

      <div className="section_one">
        <div className="container">
          <p>
            Memorial Sloan Kettering Cancer Centers' Global Cancer Disparities
            Initiatives (GCDI) Program and the African Research Group for
            Oncology (ARGO) would like to invite applications for the Nigerian
            Cancer Research Training (NCAT) program. This program, enabled by
            philanthropic support, seeks to create a cohort of highly skilled
            investigators able to lead independent oncology research programs,
            bolster research capacity in Nigeria, and create long-term research
            partnerships between Nigerian and US cancer researchers.
          </p>
          <p>
            Twelve applicants per year from ARGO institutions will be selected
            to participate in the program. It is anticipated that the program
            will run for three years. All selected applicants will be matched
            with a Nigerian and US mentor, all will participate in the virtual
            academy as well as two in-person training workshops in Ile Ife,
            Nigeria annually. Additionally there will be opportunities to apply
            to and be financially sponsored for a variety of educational
            programs including: an MPH program in Nigeria, a virtual certificate
            program from the Harvard Chan School of Public Health in the
            Principles and Practice of Clinical Research, and Observership
            opportunities at Memorial Sloan Kettering Cancer Center in New York.
          </p>

          <p>
            Candidates who meet the following criteria and have are interested
            in applying to the program should complete the application on the
            following pages.
          </p>
          <h3>Criteria:</h3>
          <ul>
            <li>
              {" "}
              <p>Consultant (MD) or Faculty lecturer (PhD)</p>
            </li>
            <li>
              {" "}
              <p>
                Open to all physician, nursing, and science (social sciences and
                basic sciences) fields involved in cancer research
              </p>
            </li>
            <li>
              {" "}
              <p>
                Has a position in institution for at least the year of the NCAT
                program and one year beyond.
              </p>
            </li>
            <li>
              {" "}
              <p>Support of Department leadership</p>
            </li>
          </ul>
          <h3>Applications must be received by August 01, 2021</h3>
        </div>
      </div>
      <div className="section_form">
        <div className="container">
          <Form />
        </div>
      </div>
    </>
  );
};

export default FormPage;

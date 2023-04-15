import React from "react";
import "./SingleEntry.scss";
import axios from "axios";
import { useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";

const SingleEntry = () => {
  const loaderData = useLoaderData();

  const entry = { ...loaderData.data[0] };
  return (
    <>
      <div className="single-entry">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Form Field</th>
                <th>Form Entry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{entry.lastname + " " + entry.firstname}</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>{entry.email}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{entry.phone_number}</td>
              </tr>
              <tr>
                <td>Position</td>
                <td>{entry.position}</td>
              </tr>
              <tr>
                <td>Speciality</td>
                <td>{entry.speciality}</td>
              </tr>
              <tr>
                <td>Affiliation</td>
                <td>{entry.affiliation}</td>
              </tr>
              <tr>
                <td>research_interest</td>
                <td>{entry.research_interest}</td>
              </tr>
              <tr>
                <td>experience</td>
                <td>{entry.experience}</td>
              </tr>
              <tr>
                <td>publications</td>
                <td>{entry.publications}</td>
              </tr>
              <tr>
                <td>awards</td>
                <td>{entry.awards}</td>
              </tr>
              <tr>
                <td>personal_statement</td>
                <td>{entry.persosnal_statement}</td>
              </tr>
              <tr>
                <td>Attachment</td>
                <td className="entry_button">
                  <NavLink to={entry.fileUrl}>
                    <button disabled={!entry.fileUrl.length > 0}>
                      Download attached document
                    </button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SingleEntry;

export const singleEntryLoader = async ({ params }) => {
  const id = params.id;
  return await axios
    .get(`http://localhost:5001/api/form/entries/${id}`)
    .then((res) => res.data);
};

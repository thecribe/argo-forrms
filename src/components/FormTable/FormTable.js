import React from "react";
import "./FormTable.scss";
import axios from "axios";
import { NavLink, useLoaderData } from "react-router-dom";

const FormTable = () => {
  const loaderData = useLoaderData();

  let formData = loaderData.data.map((data, index) => {
    return (
      <tr key={index}>
        <td className="serial-number">{index + 1}</td>
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{data.email}</td>
        <td>{data.phone_number}</td>
        <td className="entry_button">
          <NavLink to={"/form-entries/" + data.id}>
            <button>View entry</button>
          </NavLink>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="form-field">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th className="serial-number">S/N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th className="entry_button">Entries</th>
              </tr>
            </thead>
            <tbody>{formData}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormTable;

export const formFieldLoader = async () => {
  return axios.get("http://localhost:5001/api/form/").then((res) => res.data);
};

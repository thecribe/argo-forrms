import React from "react";
import "./FormTable.scss";
import axios from "axios";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const FormTable = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
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

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = async () => {
    return await axios
      .get("http://localhost:5001/api/users/logout", {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.removeItem("user");
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

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
          {user && (
            <p onClick={logoutHandler} className="logout-btn">
              <NavLink className="admin-btn">
                Logout {user.username} <FaArrowRight className="arrow" />
              </NavLink>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FormTable;

export const formFieldLoader = async () => {
  return axios
    .get("http://localhost:5001/api/form/", {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => res.data);
};

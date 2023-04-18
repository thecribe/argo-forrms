import React, { useState } from "react";
import "./UserAuthentication.scss";
import axios from "axios";
import { useNavigate } from "react-router";

const UserAuthentication = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formInput, setformInput] = useState({
    username: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5001/api/users/userAuth", formInput, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.userdata));
        navigate("/form-entries", { replace: true });
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  const inputHandler = (e) => {
    setformInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="userAuth">
        <h1>Login</h1>
        <form className="login_form">
          <div className="form_group">
            <label htmlFor="username">Username/E-mail:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter a username or email"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="login-action-btn">
            <button className="login_btn" onClick={(e) => loginHandler(e)}>
              Log in
            </button>
            {message.length > 0 && <p>{message}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default UserAuthentication;

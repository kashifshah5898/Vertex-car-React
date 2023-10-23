import React, { useState } from "react";

import "./Login.css";
import LoginLayout from "./LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home";

const Login = () => {
  const Navigate = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Arham",
      password: "pass1",
    },
    {
      username: "Umair",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        Navigate("/Home");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <LoginLayout>
      <div className="contact-form-info">
        <form onSubmit={handleSubmit}>
          <div className="input-fields-login">
            <div className="contact-label-login">
              <label htmlFor="name">
                Your Name <br />
              </label>
            </div>
            <div className="contact-input-login">
              <input
                type="name"
                id="name"
                name="uname"
                placeholder="Your Name"
                required
              />
              {/* <UserOutlined className="contact-icon-user" /> */}
              {renderErrorMessage("uname")}
            </div>
          </div>
          <div className="input-fields-password">
            <div className="contact-label-login">
              <label htmlFor="email">Your password</label>
            </div>
            <div className="contact-input-login">
              <input
                type="password"
                id="email"
                placeholder=" Password"
                name="pass"
                required
                pl
              />
              {/* <MailOutlined className="contact-icon-mail" /> */}
              {renderErrorMessage("pass")}
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
             <Link to={"/forget"}>Forget Password</Link>
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
              {/* <img src=" /Users/psi-square/Desktop/Vertex/vertex-app/src/Assests/vertex-car-logo.png" alt=""/> */}
            </div>
          </div>
        </form>
      </div>
    </LoginLayout>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;

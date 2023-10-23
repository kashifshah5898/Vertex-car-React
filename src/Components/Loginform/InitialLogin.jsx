import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./InitialLogin.css";

const InitialLogin = () => {
    const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you should perform your actual login logic
    // For demonstration purposes, I'm using a simple check
    if (email === "user@example.com" && password === "password") {
      setLoggedIn(true);
    }
  };

  // Use an effect to trigger the redirection after successful login
  React.useEffect(() => {
    if (loggedIn) {
      // Redirect to the home page after successful login
      // Use a return statement to avoid unnecessary re-renders
      Navigate ("/home" );
    }
  }, [loggedIn]);

  return (
    <div className="initial-login-container">
      <h1>Welcome to the Website</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default InitialLogin;

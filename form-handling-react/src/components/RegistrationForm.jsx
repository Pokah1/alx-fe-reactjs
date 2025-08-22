import React, { useState } from "react";
import "../components/RegistrationForm.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErros = {};

    if (!username) {
      validationErros.username = "Username is required.";
    }

    if (!email) {
      validationErros.email = "Email is required.";
    }

    if (!password) {
      validationErros.password = "Password is required.";
    }

    if (Object.keys(validationErros).length > 0) {
      setErrors(validationErros);
      return;
    }

    setErrors({});
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register</h2>

      {errors.username && <p className="error">{errors.username}</p>}
      {errors.email && <p className="error">{errors.email}</p>}
      {errors.password && <p className="error">{errors.password}</p>}
      

      <div className="form-group">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;

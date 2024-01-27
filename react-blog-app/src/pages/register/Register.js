import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios

import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the registration endpoint
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });

      console.log('Registration response:', response.data);

      // Handle the success response accordingly (redirect, show a success message, etc.)
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);

      // Handle the error response accordingly (show an error message, etc.)
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

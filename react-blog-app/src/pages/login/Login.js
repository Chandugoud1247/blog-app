import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      console.log('Login response:', response.data);

      if (response.data.success) {
        // Login successful, store token and set user authentication status
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', true);
        // Login successful, navigate to home page
        history.push('/');
      } else {
        // Login failed, display error message
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle other errors during login (show an error message, etc.)
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}

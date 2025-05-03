import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password are correct
    if (username === 'bhargav' && password === '2003') {
      // Set authentication status in localStorage
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('username', username); // Optionally store username

      // Redirect to Room Listings page
      navigate('/room-listings');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Username : bhargav</p>
      <p>Password : 2003</p>
      </form>
    </div>
  );
};

export default LoginPage;

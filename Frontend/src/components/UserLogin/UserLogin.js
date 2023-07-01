import React, { useState } from 'react';
import axios from 'axios';
import './UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post('/api/login', { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className="user-login-container">
      <header>
        <h1>Soulswap</h1>
        <h2>Iniciar Sesión</h2>
      </header>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons-container">
          <button className="login-button" onClick={handleLogin}>
            Iniciar Sesión
          </button>
          <button className="go-back-button">Volver</button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

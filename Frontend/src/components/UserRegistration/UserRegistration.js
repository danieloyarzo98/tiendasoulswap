import React, { useState } from 'react';
import './UserRegistration.css';
import axios from 'axios';

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/users/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="user-registration-container">
      <header>
        <h1>Soulswap</h1>
        <h2>Registrarse</h2>
      </header>
      <div className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Nombre de Usuario</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <button className="register-button" onClick={handleRegister}>
            Registrarse
          </button>
          <button className="go-back-button">Volver</button>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
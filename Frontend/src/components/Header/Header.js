import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

const Header = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    axios
      .post('/api/login', { email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      });
  };

  const handleRegister = () => {
    axios
      .post('/api/register', { username, email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al registrarse:', error);
      });
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/login" onClick={handleLogin}>
              Iniciar Sesión
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" onClick={handleRegister}>
              Registrarse
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FaShoppingCart />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <FaUser />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

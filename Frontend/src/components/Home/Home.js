import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import background from '../../images/background.jpg';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-text-container">
          <h1>Bienvenido a Soulswap</h1>
          <p>Encuentra las mejores partes para tu PC gamer</p>
          <Link to="/productlist" className="gamer-button">Productos</Link>
        </div>
        <div className="hero-background">
          <img src={background} alt="Background Image" />
        </div>
      </section>
    </div>
  );
};

export default Home;


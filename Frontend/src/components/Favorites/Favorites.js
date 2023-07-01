import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Favorites.css';

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Obtener los productos favoritos del backend al cargar el componente
    getFavoriteProducts();
  }, []);

  const getFavoriteProducts = () => {
    // Realizar la llamada al backend para obtener los productos favoritos del usuario actual
    axios.get('/api/favorites')
      .then(response => {
        setFavoriteProducts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos favoritos:', error);
      });
  };

  return (
    <div className="favorites-container">
      <h2>Mis Favoritos</h2>
      <div className="favorite-products">
        {favoriteProducts.map((product, index) => (
          <div key={index} className="favorite-product">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

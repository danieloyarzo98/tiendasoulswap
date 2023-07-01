import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Obtener los favoritos del backend al cargar el contexto
    getFavorites();
  }, []);

  const getFavorites = () => {
    // Realizar la llamada al backend para obtener los favoritos del usuario actual
    axios.get('/api/favorites')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los favoritos:', error);
      });
  };

  const addFavorite = (product) => {
    // Enviar la solicitud al backend para agregar el producto a los favoritos
    axios.post('/api/favorites', { productId: product.id })
      .then(response => {
        setFavorites([...favorites, product]);
      })
      .catch(error => {
        console.error('Error al agregar el producto a los favoritos:', error);
      });
  };

  const removeFavorite = (product) => {
    // Enviar la solicitud al backend para eliminar el producto de los favoritos
    axios.delete(`/api/favorites/${product.id}`)
      .then(response => {
        setFavorites(favorites.filter(fav => fav.id !== product.id));
      })
      .catch(error => {
        console.error('Error al eliminar el producto de los favoritos:', error);
      });
  };

  const isFavorite = (product) => {
    return favorites.some(fav => fav.id === product.id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

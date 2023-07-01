const express = require('express');
const router = express.Router();
const FavoritesController = require('./controllers/FavoritesController');

// Obtener los productos favoritos del usuario actual
router.get('/favorites', FavoritesController.getFavoriteProducts);

// Agregar un producto a los favoritos
router.post('/favorites', FavoritesController.addFavoriteProduct);

// Eliminar un producto de los favoritos
router.delete('/favorites/:productId', FavoritesController.removeFavoriteProduct);

module.exports = router;


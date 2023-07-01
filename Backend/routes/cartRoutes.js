const express = require('express');
const router = express.Router();
const CartController = require('./controllers/CartController');

// Obtener los elementos del carrito
router.get('/cart', CartController.getCartItems);

// Agregar un elemento al carrito
router.post('/cart', CartController.addToCart);

// Actualizar la cantidad de un elemento en el carrito
router.put('/cart/:cartItemId', CartController.updateCartItemQuantity);

// Eliminar un elemento del carrito
router.delete('/cart/:cartItemId', CartController.removeFromCart);

module.exports = router;

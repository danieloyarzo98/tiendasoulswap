const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Obtener los detalles de un producto por ID
router.get('/products/:productId', productController.getProductById);

// Obtener todos los productos de una categoría
router.get('/products/category/:category', productController.getProductsByCategory);

module.exports = router;

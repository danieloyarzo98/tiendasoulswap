const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
// Agrega otras rutas de autenticación si es necesario

module.exports = router;

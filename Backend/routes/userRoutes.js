const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Obtener información del perfil de usuario
router.get('/profile', authenticateToken, userController.getProfile);

// Actualizar información del perfil de usuario
router.put('/profile', authenticateToken, userController.updateProfile);

// Registrar un nuevo usuario
router.post('/register', userController.registerUser);

module.exports = router;

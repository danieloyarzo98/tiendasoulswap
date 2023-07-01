const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// Obtener información del perfil de usuario
const getProfile = async (req, res) => {
  const userId = req.user.id; // Obtener el ID del usuario autenticado desde el token
  try {
    const user = await User.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    res.status(500).json({ error: 'Error al obtener el perfil del usuario' });
  }
};

// Actualizar información del perfil de usuario
const updateProfile = async (req, res) => {
  const userId = req.user.id; // Obtener el ID del usuario autenticado desde el token
  const newData = req.body;
  try {
    const user = await User.updateUser(userId, newData);
    res.json(user);
  } catch (error) {
    console.error('Error al actualizar el perfil del usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el perfil del usuario' });
  }
};

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Verificar si el email ya está registrado
    const existingUser = await User.getByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    // Crear el nuevo usuario en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUser({ name, email, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  registerUser,
};


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Función para generar un token de autenticación
const generateAuthToken = (userId) => {
  const token = jwt.sign({ userId }, 'secreto', { expiresIn: '1h' });
  return token;
};

// Iniciar sesión
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Buscar el usuario por email en la base de datos
    const user = await User.getByEmail(email);

    // Verificar si el usuario existe y si la contraseña es correcta
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Generar y enviar el token de autenticación
    const token = generateAuthToken(user.id);
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// Registrar un nuevo usuario
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Verificar si el email ya está registrado
    const existingUser = await User.getByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    // Crear el nuevo usuario en la base de datos
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });

    // Generar y enviar el token de autenticación
    const token = generateAuthToken(user.id);
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

module.exports = {
  login,
  register,
};
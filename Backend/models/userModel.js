const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Obtener todos los usuarios
const getUsers = async () => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};

// Obtener un usuario por ID
const getUserById = async (userId) => {
  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [userId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  }
};

// Crear un nuevo usuario
const createUser = async (user) => {
  try {
    const { name, email, password } = user;
    const query =
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};

// Actualizar un usuario
const updateUser = async (userId, newData) => {
  try {
    const { name, email, password } = newData;
    const query =
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *';
    const values = [name, email, password, userId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
};
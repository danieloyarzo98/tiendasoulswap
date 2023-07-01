const { Pool } = require('pg');
const pool = require('../config/conexion');

// Crear una nueva publicación
const createPost = async (title, description, price, category, image) => {
  const query = 'INSERT INTO posts (title, description, price, category, image) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [title, description, price, category, image];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear la publicación:', error);
    throw new Error('Error al crear la publicación');
  }
};

module.exports = {
  createPost,
};
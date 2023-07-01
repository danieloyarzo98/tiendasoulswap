const { Pool } = require('pg');

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432, // Puerto por defecto de PostgreSQL
});

const getProductById = async (productId) => {
  try {
    const query = 'SELECT * FROM products WHERE id = $1';
    const values = [productId];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};

const getProductsByCategory = async (category) => {
  try {
    const query = 'SELECT * FROM products WHERE category = $1';
    const values = [category];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error('Error al obtener los productos por categoría:', error);
    throw error;
  }
};

module.exports = {
  getProductById,
  getProductsByCategory,
};


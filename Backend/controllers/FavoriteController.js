const { Pool } = require('pg');
const pool = new Pool({
  user: 'soulswap',
  host: 'localhost',
  database: 'soulswap',
  password: '1998',
  port: 5432,
});

// Obtener los productos favoritos del usuario actual
const getFavoriteProducts = async (req, res) => {
  try {
    const { userId } = req.params;
    const query = 'SELECT * FROM favorite_products WHERE user_id = $1';
    const values = [userId];
    const result = await pool.query(query, values);
    const favoriteProducts = result.rows;
    res.json(favoriteProducts);
  } catch (error) {
    console.error('Error al obtener los productos favoritos:', error);
    res.status(500).json({ error: 'Error al obtener los productos favoritos' });
  }
};

// Agregar un producto a los favoritos
const addFavoriteProduct = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const query = 'INSERT INTO favorite_products (user_id, product_id) VALUES ($1, $2) RETURNING *';
    const values = [userId, productId];
    const result = await pool.query(query, values);
    const favoriteProduct = result.rows[0];
    res.status(201).json(favoriteProduct);
  } catch (error) {
    console.error('Error al agregar el producto a los favoritos:', error);
    res.status(500).json({ error: 'Error al agregar el producto a los favoritos' });
  }
};

// Eliminar un producto de los favoritos
const removeFavoriteProduct = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const query = 'DELETE FROM favorite_products WHERE user_id = $1 AND product_id = $2';
    const values = [userId, productId];
    await pool.query(query, values);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error al eliminar el producto de los favoritos:', error);
    res.status(500).json({ error: 'Error al eliminar el producto de los favoritos' });
  }
};

module.exports = {
  getFavoriteProducts,
  addFavoriteProduct,
  removeFavoriteProduct,
};


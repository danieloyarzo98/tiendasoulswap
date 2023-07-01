const productModel = require('../models/productModel');

const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productModel.getProductById(productId);
    res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await productModel.getProductsByCategory(category);
    res.json(products);
  } catch (error) {
    console.error('Error al obtener los productos por categoría:', error);
    res.status(500).json({ error: 'Error al obtener los productos por categoría' });
  }
};

module.exports = {
  getProductById,
  getProductsByCategory,
};


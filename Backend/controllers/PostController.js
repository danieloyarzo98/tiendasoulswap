const postModel = require('../models/postModel');

// Crear una nueva publicación
const createPost = async (req, res) => {
  try {
    const { title, description, price, category, image } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!title || !description || !price || !category || !image) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Crear la nueva publicación en la base de datos
    const post = await postModel.createPost(title, description, price, category, image);

    res.status(201).json(post);
  } catch (error) {
    console.error('Error al crear la publicación:', error);
    res.status(500).json({ error: 'Error al crear la publicación' });
  }
};

module.exports = {
  createPost,
};

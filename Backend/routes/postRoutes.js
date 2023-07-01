const express = require('express');
const router = express.Router();
const postController = require('./controllers/PostController');

// Crear una nueva publicación
router.post('/posts', postController.createPost);

module.exports = router;

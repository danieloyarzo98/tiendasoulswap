const express = require('express');
const router = express.Router();
const CommentController = require('./controllers/CommentController');

// Obtener los comentarios de una publicación específica
router.get('/comments/product/:productId', CommentController.getCommentsByProductId);

// Crear un nuevo comentario
router.post('/comments', CommentController.createComment);

module.exports = router;
const db = require('../config/conexion');

// Obtener los comentarios de una publicación específica
const getCommentsByProductId = async (req, res) => {
    const { productId } = req.params;
    try {
        const comments = await db.any('SELECT * FROM comentarios WHERE id_publicacion = $1', [productId]);
        res.json(comments);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
};

// Crear un nuevo comentario
const createComment = async (req, res) => {
    const { content, userId, productId } = req.body;
    try {
        const comment = await db.one(
            'INSERT INTO comentarios (contenido, id_usuario, id_publicacion) VALUES ($1, $2, $3) RETURNING *',
            [content, userId, productId]
        );
        res.status(201).json(comment);
    } catch (error) {
        console.error('Error al crear el comentario:', error);
        res.status(500).json({ error: 'Error al crear el comentario' });
    }
};

module.exports = {
    getCommentsByProductId,
    createComment
};

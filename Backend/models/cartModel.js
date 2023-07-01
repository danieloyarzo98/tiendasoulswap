// Importar la conexión a la base de datos
const db = require('../config/conexion');

// Definir el modelo Cart
const Cart = {};

// Obtener los elementos del carrito
Cart.getCartItems = () => {
  return db.query('SELECT * FROM publicacion');
};

// Agregar un elemento al carrito
Cart.addToCart = (product) => {
  return db.query('INSERT INTO publicacion (titulo, descripcion, precio, imagen, id_usuario, id_categoria, id_comentario, id_imagen) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [product.titulo, product.descripcion, product.precio, product.imagen, product.id_usuario, product.id_categoria, product.id_comentario, product.id_imagen]);
};

// Actualizar la cantidad de un elemento en el carrito
Cart.updateCartItemQuantity = (cartItemId, quantity) => {
  return db.query('UPDATE publicacion SET cantidad = $1 WHERE id = $2 RETURNING *', [quantity, cartItemId]);
};

// Eliminar un elemento del carrito
Cart.removeFromCart = (cartItemId) => {
  return db.query('DELETE FROM publicacion WHERE id = $1', [cartItemId]);
};

module.exports = Cart;

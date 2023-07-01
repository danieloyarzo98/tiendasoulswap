const { CartItem } = require('../models/cartModel');

// Obtener los elementos del carrito
const getCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.findAll();
        res.json(cartItems);
    } catch (error) {
        console.error('Error al obtener los elementos del carrito:', error);
        res.status(500).json({ error: 'Error al obtener los elementos del carrito' });
    }
};

// Agregar un elemento al carrito
const addToCart = async (req, res) => {
    const { product } = req.body;
    try {
        const cartItem = await CartItem.create(product);
        res.status(201).json(cartItem);
    } catch (error) {
        console.error('Error al agregar un elemento al carrito:', error);
        res.status(500).json({ error: 'Error al agregar un elemento al carrito' });
    }
};

// Actualizar la cantidad de un elemento en el carrito
const updateCartItemQuantity = async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;
    try {
        const cartItem = await CartItem.findByPk(cartItemId);
        if (!cartItem) {
            return res.status(404).json({ error: 'Elemento no encontrado en el carrito' });
        }
        cartItem.quantity = quantity;
        await cartItem.save();
        res.json(cartItem);
    } catch (error) {
        console.error('Error al actualizar la cantidad del elemento en el carrito:', error);
        res.status(500).json({ error: 'Error al actualizar la cantidad del elemento en el carrito' });
    }
};

// Eliminar un elemento del carrito
const removeFromCart = async (req, res) => {
    const { cartItemId } = req.params;
    try {
        const cartItem = await CartItem.findByPk(cartItemId);
        if (!cartItem) {
            return res.status(404).json({ error: 'Elemento no encontrado en el carrito' });
        }
        await cartItem.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar el elemento del carrito:', error);
        res.status(500).json({ error: 'Error al eliminar el elemento del carrito' });
    }
};

module.exports = {
    getCartItems,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
};

import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './Cart.css';

const CartItem = ({ product, onDecrement, onIncrement, onRemove }) => {
  const { id, name, image, price, quantity } = product;

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <img src={image} alt={name} className="cart-item-image" />
        <p className="cart-item-name">{name}</p>
      </div>
      <div className="cart-item-quantity">
        <button className="quantity-button" onClick={() => onDecrement(id)}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button" onClick={() => onIncrement(id)}>
          +
        </button>
      </div>
      <div className="cart-item-price">{price}</div>
      <button className="remove-button" onClick={() => onRemove(id)}>
        x
      </button>
    </div>
  );
};

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const handleDecrement = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    addToCart(productId);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Cart;
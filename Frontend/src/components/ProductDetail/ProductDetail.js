import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import CommentSection from '../CommentSection/CommentSection';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios
      .get(`/api/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los detalles del producto:', error);
      });
  };

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const { name, image, details, price } = product;

  return (
    <div className="product-detail-container">
      <div className="product-detail-left">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-detail-middle">
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <div className="product-detail-right">
        <h3>{price}</h3>
      </div>
      <div className="comment-section">
        <CommentSection product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;



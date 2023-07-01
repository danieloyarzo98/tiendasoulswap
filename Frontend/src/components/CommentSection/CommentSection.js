import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentSection.css';

const CommentSection = (props) => {
  const { product, user } = props;
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    getProductComments(product);
  }, [product]);

  const getProductComments = (product) => {
    axios.get(`/api/comments/product/${product.id}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los comentarios:', error);
      });
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/comments', {
      content: commentText,
      userId: user.id, // Reemplaza con el ID del usuario actual
      productId: product.id
    })
      .then(response => {
        setCommentText('');
        getProductComments(product);
      })
      .catch(error => {
        console.error('Error al enviar el comentario:', error);
      });
  };

  return (
    <div className="comment-section">
      <h2>Comentarios</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <h3>{comment.title}</h3>
          <p>{comment.content}</p>
          <span>{comment.author}</span>
        </div>
      ))}
      <form onSubmit={handleCommentSubmit}>
        <textarea value={commentText} onChange={handleCommentChange}></textarea>
        <button type="submit">Enviar comentario</button>
      </form>
    </div>
  );
};

export default CommentSection;


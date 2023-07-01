import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('category', category);

    axios.post('/api/posts', formData)
      .then(response => {
        console.log('Publicación creada:', response.data);
        setTitle('');
        setDescription('');
        setPrice('');
        setImage(null);
        setCategory('');
      })
      .catch(error => {
        console.error('Error al crear la publicación:', error);
      });
  };

  return (
    <div className="create-post-container">
      <h2>Crear Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} required />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" value={price} onChange={handlePriceChange} required />
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} required />
        </div>
        <div>
          <label htmlFor="category">Categoría:</label>
          <select id="category" value={category} onChange={handleCategoryChange} required>
            <option value="">Seleccione una categoría</option>
            <option value="gpu">GPU</option>
            <option value="cpu">CPU</option>
            <option value="motherboard">Motherboard</option>
            <option value="ram">RAM</option>
            <option value="ssd">SSD</option>
            <option value="gabinete">Gabinete</option>
          </select>
        </div>
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
};

export default CreatePost;
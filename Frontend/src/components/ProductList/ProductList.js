import React, { useState, useContext } from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../FavoritesContext/FavoritesContext';
import { CartContext } from '../CartContext/CartContext'; 
import gpu1 from '../../assets/images/gpu/gpu1.png';
import gpu2 from '../../assets/images/gpu/gpu2.png';
import gpu3 from '../../assets/images/gpu/gpu3.png';
import gpu4 from '../../assets/images/gpu/gpu4.png';
import gpu5 from '../../assets/images/gpu/gpu5.png';
import gpu6 from '../../assets/images/gpu/gpu6.png';
import cpu1 from '../../assets/images/cpu/cpu1.jpg';
import cpu2 from '../../assets/images/cpu/cpu2.jpg';
import cpu3 from '../../assets/images/cpu/cpu3.jpg';
import cpu4 from '../../assets/images/cpu/cpu4.jpg';
import cpu5 from '../../assets/images/cpu/cpu5.jpg';
import cpu6 from '../../assets/images/cpu/cpu6.jpg';
import gabinete1 from '../../assets/images/gabinete/gabinete1.png';
import gabinete2 from '../../assets/images/gabinete/gabinete2.png';
import gabinete3 from '../../assets/images/gabinete/gabinete3.png';
import gabinete4 from '../../assets/images/gabinete/gabinete4.png';
import gabinete5 from '../../assets/images/gabinete/gabinete5.png';
import gabinete6 from '../../assets/images/gabinete/gabinete6.png';
import mb1 from '../../assets/images/motherboard/mb1.png';
import mb2 from '../../assets/images/motherboard/mb2.png';
import mb3 from '../../assets/images/motherboard/mb3.png';
import mb4 from '../../assets/images/motherboard/mb4.png';
import mb5 from '../../assets/images/motherboard/mb5.png';
import mb6 from '../../assets/images/motherboard/mb6.png';
import ram1 from '../../assets/images/ram/ram1.png';
import ram2 from '../../assets/images/ram/ram2.png';
import ram3 from '../../assets/images/ram/ram3.png';
import ram4 from '../../assets/images/ram/ram4.png';
import ram5 from '../../assets/images/ram/ram5.png';
import ram6 from '../../assets/images/ram/ram6.png';
import ssd1 from '../../assets/images/ssd/ssd1.png';
import ssd2 from '../../assets/images/ssd/ssd2.png';
import ssd3 from '../../assets/images/ssd/ssd3.png';
import ssd4 from '../../assets/images/ssd/ssd4.png';
import ssd5 from '../../assets/images/ssd/ssd5.png';
import ssd6 from '../../assets/images/ssd/ssd6.png';

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
    const { addToCart } = useContext(CartContext);

    const categories = ['gpu', 'cpu', 'motherboard', 'ram', 'ssd', 'gabinete'];

    const images = {
        gpu: [gpu1, gpu2, gpu3, gpu4, gpu5, gpu6],
        cpu: [cpu1, cpu2, cpu3, cpu4, cpu5, cpu6],
        motherboard: [mb1, mb2, mb3, mb4, mb5, mb6],
        ram: [ram1, ram2, ram3, ram4, ram5, ram6],
        ssd: [ssd1, ssd2, ssd3, ssd4, ssd5, ssd6],
        gabinete: [gabinete1, gabinete2, gabinete3, gabinete4, gabinete5, gabinete6],
    };

    // ...
    const products = {
        gpu: [
            { name: 'GPU 1', price: '$200' },
            { name: 'GPU 2', price: '$250' },
            { name: 'GPU 3', price: '$300' },
            { name: 'GPU 4', price: '$350' },
            { name: 'GPU 5', price: '$400' },
            { name: 'GPU 6', price: '$450' },
        ],
        cpu: [
            { name: 'CPU 1', price: '$150' },
            { name: 'CPU 2', price: '$200' },
            { name: 'CPU 3', price: '$250' },
            { name: 'CPU 4', price: '$300' },
            { name: 'CPU 5', price: '$350' },
            { name: 'CPU 6', price: '$400' },
        ],
        motherboard: [
            { name: 'MB 1', price: '$150' },
            { name: 'MB 2', price: '$200' },
            { name: 'MB 3', price: '$250' },
            { name: 'MB 4', price: '$300' },
            { name: 'MB 5', price: '$350' },
            { name: 'MB 6', price: '$400' },
        ],
        ram: [
            { name: 'RAM 1', price: '$150' },
            { name: 'RAM 2', price: '$200' },
            { name: 'RAM 3', price: '$250' },
            { name: 'RAM 4', price: '$300' },
            { name: 'RAM 5', price: '$350' },
            { name: 'RAM 6', price: '$400' },
        ],
        ssd: [
            { name: 'SSD 1', price: '$150' },
            { name: 'SSD 2', price: '$200' },
            { name: 'SSD 3', price: '$250' },
            { name: 'SSD 4', price: '$300' },
            { name: 'SSD 5', price: '$350' },
            { name: 'SSD 6', price: '$400' },
        ],
        gabinete: [
            { name: 'GABINETE 1', price: '$150' },
            { name: 'GABINETE 2', price: '$200' },
            { name: 'GABINETE 3', price: '$250' },
            { name: 'GABINETE 4', price: '$300' },
            { name: 'GABINETE 5', price: '$350' },
            { name: 'GABINETE 6', price: '$400' },
        ],

    };

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    const handleFavoriteToggle = (product) => {
        if (isFavorite(product)) {
            removeFavorite(product);
        } else {
            addFavorite(product);
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="product-list-container">
            <div className="category-selector">
                <h2>Categorías</h2>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelection(category)}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
                <Link to="/create-post" className="create-post-button">
                    Crear Publicación
                </Link>
            </div>
            <div className="product-grid">
                {selectedCategory &&
                    products[selectedCategory].map((product, index) => (
                        <div key={`${selectedCategory}-${index + 1}`} className="product-item">
                            <Link to={`/productdetail/${selectedCategory}-${index + 1}`} className="product-link">
                                <img
                                    src={images[selectedCategory][index]}
                                    alt={`${selectedCategory} ${index + 1}`}
                                    className="product-image"
                                />
                                <div className="product-details">
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-price">
                                        {product.price}
                                        <FaHeart
                                            className={`heart-icon${isFavorite(product) ? ' active' : ''}`}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleFavoriteToggle(product);
                                            }}
                                        />
                                    </p>
                                </div>
                            </Link>
                            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductList;

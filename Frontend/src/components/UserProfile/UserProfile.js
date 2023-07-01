import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userUsername, setUserUsername] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const [editEmail, setEditEmail] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editUsername, setEditUsername] = useState(false);
    const [editPhone, setEditPhone] = useState(false);

    useEffect(() => {
        // Obtener los datos del perfil del usuario al cargar el componente
        axios
            .get('/api/profile')
            .then((response) => {
                const { email, name, username, phone, favoriteProducts } = response.data;
                setUserEmail(email);
                setUserName(name);
                setUserUsername(username);
                setUserPhone(phone);
                setFavoriteProducts(favoriteProducts);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    }, []);

    const handleEditEmail = () => {
        setEditEmail(true);
    };

    const handleEditName = () => {
        setEditName(true);
    };

    const handleEditUsername = () => {
        setEditUsername(true);
    };

    const handleEditPhone = () => {
        setEditPhone(true);
    };

    const handleSave = (field) => {
        let updatedData = {};
        switch (field) {
            case 'email':
                updatedData = { email: userEmail };
                break;
            case 'name':
                updatedData = { name: userName };
                break;
            case 'username':
                updatedData = { username: userUsername };
                break;
            case 'phone':
                updatedData = { phone: userPhone };
                break;
            default:
                break;
        }

        axios
            .put('/api/profile', updatedData)
            .then((response) => {
                console.log(response.data);
                // Manejar la respuesta exitosa del backend
            })
            .catch((error) => {
                console.error(error.response.data);
                // Manejar el error de la solicitud o la respuesta de error del backend
            });

        switch (field) {
            case 'email':
                setEditEmail(false);
                break;
            case 'name':
                setEditName(false);
                break;
            case 'username':
                setEditUsername(false);
                break;
            case 'phone':
                setEditPhone(false);
                break;
            default:
                break;
        }
    };

    const handleCancel = (field) => {
        switch (field) {
            case 'email':
                setEditEmail(false);
                setUserEmail('');
                break;
            case 'name':
                setEditName(false);
                setUserName('');
                break;
            case 'username':
                setEditUsername(false);
                setUserUsername('');
                break;
            case 'phone':
                setEditPhone(false);
                setUserPhone('');
                break;
            default:
                break;
        }
    };

    return (
        <div className="user-container">
            <div className="user-profile">
                <h1>Mis Datos</h1>
                <section>
                    <h2>E-mail</h2>
                    {editEmail ? (
                        <div>
                            <input
                                type="text"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                            <button onClick={() => handleSave('email')}>Guardar</button>
                            <button onClick={() => handleCancel('email')}>Cancelar</button>
                        </div>
                    ) : (
                        <div>
                            <p>{userEmail}</p>
                            <button onClick={handleEditEmail}>Modificar</button>
                        </div>
                    )}
                </section>
                <section>
                    <h2>Nombre elegido</h2>
                    {editName ? (
                        <div>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <button onClick={() => handleSave('name')}>Guardar</button>
                            <button onClick={() => handleCancel('name')}>Cancelar</button>
                        </div>
                    ) : (
                        <div>
                            <p>{userName}</p>
                            <button onClick={handleEditName}>Modificar</button>
                        </div>
                    )}
                </section>
                <section>
                    <h2>Usuario</h2>
                    {editUsername ? (
                        <div>
                            <input
                                type="text"
                                value={userUsername}
                                onChange={(e) => setUserUsername(e.target.value)}
                            />
                            <button onClick={() => handleSave('username')}>Guardar</button>
                            <button onClick={() => handleCancel('username')}>Cancelar</button>
                        </div>
                    ) : (
                        <div>
                            <p>{userUsername}</p>
                            <button onClick={handleEditUsername}>Modificar</button>
                        </div>
                    )}
                </section>
                <section>
                    <h2>Teléfono de contacto</h2>
                    {editPhone ? (
                        <div>
                            <input
                                type="text"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                            />
                            <button onClick={() => handleSave('phone')}>Guardar</button>
                            <button onClick={() => handleCancel('phone')}>Cancelar</button>
                        </div>
                    ) : (
                        <div>
                            <p>{userPhone}</p>
                            <button onClick={handleEditPhone}>Modificar</button>
                        </div>
                    )}
                </section>
            </div>
            <div className="user-sections">
                <section className="publicaciones">
                    <h2>Mis Publicaciones</h2>
                    {/* Aquí puedes agregar el contenido de las publicaciones del usuario */}
                </section>
                <section className="favoritos">
                    <h2>Mis Productos Favoritos</h2>
                    {favoriteProducts.length > 0 ? (
                        favoriteProducts.map((product) => (
                            <div key={product.id} className="favorite-product">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <p>{product.name}</p>
                                {/* Resto de la información del producto */}
                            </div>
                        ))
                    ) : (
                        <p>No tienes productos favoritos</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default UserProfile;

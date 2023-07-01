import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home/Home';
import UserLogin from './components/UserLogin/UserLogin';
import Header from './components/Header/Header';
import UserRegistration from './components/UserRegistration/UserRegistration';
import UserProfile from './components/UserProfile/UserProfile';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/CartContext/CartContext';
import CreatePost from './components/CreatePost/CreatePost';
import Footer from './components/Footer/Footer';
import Favorites from './components/Favorites/Favorites';
import FavoritesContextProvider from './components/FavoritesContext/FavoritesContext';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FavoritesContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/register" element={<UserRegistration />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/productdetail/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </CartContextProvider>
        </FavoritesContextProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
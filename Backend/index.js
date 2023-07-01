const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authController = require('./authController');
const userController = require('./userController');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./cartRoutes');
const commentRoutes = require('./commentRoutes');
const favoritesRoutes = require('./FavoritesRoutes');
const postRoutes = require('./postRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Rutas de autenticación y registro
app.post('/api/login', authController.login);
app.post('/api/register', userController.register);

// Rutas de usuarios
app.use('/api/users', userRoutes);

// Otras rutas
app.use('/api', cartRoutes);
app.use('/api', commentRoutes);
app.use('/api', favoritesRoutes);
app.use('/api', postRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

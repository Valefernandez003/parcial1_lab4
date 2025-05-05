const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const BookRoutes = require('./routes/book')
const AuthorRoutes = require('./routes/author');
app.use('/books', BookRoutes);
app.use('/authors',AuthorRoutes)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error al conectar con MongoDB:', err));

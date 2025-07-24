const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

const app = express();

// Configurações de PORT e MONGODB_URI
const PORT = process.env.PORT || 5000;  // Defina a porta do servidor
const MONGODB_URI = process.env.MONGODB_URI;  // URI do MongoDB

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Rotas
app.use('/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

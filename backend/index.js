const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, // ainda é recomendado manter isso
})
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch((err) => console.error('❌ Erro na conexão com o MongoDB:', err.message));

// Rotas
app.use('/projects', projectRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

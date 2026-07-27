const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000; 
const MONGODB_URI = process.env.MONGODB_URI;  

app.use(cors());
app.use(express.json({ limit: '8mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/projects', projectRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

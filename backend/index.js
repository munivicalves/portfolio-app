const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000; 
const MONGODB_URI = process.env.MONGODB_URI;  

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

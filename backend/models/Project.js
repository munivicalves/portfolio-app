const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrls: { type: [String], required: true },
  githubUrl: { type: String },
  deployUrl: { type: String },
  techs: { type: [String] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);

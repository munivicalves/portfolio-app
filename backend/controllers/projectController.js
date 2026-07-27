const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Project = require('../models/Project');

const uploadsDirectory = path.join(__dirname, '..', 'uploads');
const allowedTypes = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' };

const cleanProjectData = (body) => ({
  title: String(body.title || '').trim(),
  description: String(body.description || '').trim(),
  imageUrls: Array.isArray(body.imageUrls) ? body.imageUrls.filter(Boolean) : [],
  githubUrl: String(body.githubUrl || '').trim(),
  deployUrl: String(body.deployUrl || '').trim(),
  techs: Array.isArray(body.techs) ? body.techs.map((tech) => String(tech).trim()).filter(Boolean) : [],
});

exports.getAllProjects = async (_req, res) => {
  try {
    res.json(await Project.find().sort({ createdAt: 1 }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado.' });
    return res.json(project);
  } catch {
    return res.status(400).json({ message: 'Identificador de projeto inválido.' });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = new Project(cleanProjectData(req.body));
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, cleanProjectData(req.body), {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado.' });
    return res.json(project);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado.' });

    project.imageUrls.filter((image) => image.startsWith('/uploads/')).forEach((image) => {
      const filePath = path.join(uploadsDirectory, path.basename(image));
      fs.unlink(filePath, () => {});
    });
    return res.json({ message: 'Projeto excluído.' });
  } catch {
    return res.status(400).json({ message: 'Identificador de projeto inválido.' });
  }
};

exports.uploadImage = (req, res) => {
  const { data, type } = req.body || {};
  const extension = allowedTypes[type];
  if (!extension || typeof data !== 'string') return res.status(400).json({ message: 'Envie uma imagem PNG, JPG, WEBP ou GIF.' });

  const image = Buffer.from(data, 'base64');
  if (!image.length || image.length > 5 * 1024 * 1024) return res.status(400).json({ message: 'A imagem deve ter até 5 MB.' });

  try {
    fs.mkdirSync(uploadsDirectory, { recursive: true });
    const filename = `${Date.now()}-${crypto.randomBytes(8).toString('hex')}.${extension}`;
    fs.writeFileSync(path.join(uploadsDirectory, filename), image);
    return res.status(201).json({ url: `/uploads/${filename}` });
  } catch {
    return res.status(500).json({ message: 'Não foi possível salvar a imagem.' });
  }
};

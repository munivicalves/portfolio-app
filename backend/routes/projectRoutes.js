const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { requireAdmin } = require('../middleware/auth');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/upload', requireAdmin, projectController.uploadImage);
router.post('/', requireAdmin, projectController.createProject);
router.put('/:id', requireAdmin, projectController.updateProject);
router.delete('/:id', requireAdmin, projectController.deleteProject);

module.exports = router;

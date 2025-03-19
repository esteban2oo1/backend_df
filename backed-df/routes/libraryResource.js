const express = require('express');
const router = express.Router();
const libraryResourceController = require('../controllers/libraryResourceController');

// Routes for library resources
router.get('/', libraryResourceController.getAllResources);
router.get('/:id', libraryResourceController.getResourceById);
router.post('/', libraryResourceController.createResource);
router.put('/:id', libraryResourceController.updateResource);
router.delete('/:id', libraryResourceController.deleteResource);

module.exports = router;

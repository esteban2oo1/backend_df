const express = require('express');
const router = express.Router();
const directoryEntryController = require('../controllers/directoryEntryController');

// Routes for directory entries
router.get('/', directoryEntryController.getAllEntries);
router.get('/:id', directoryEntryController.getEntryById);
router.post('/', directoryEntryController.createEntry);
router.put('/:id', directoryEntryController.updateEntry);
router.delete('/:id', directoryEntryController.deleteEntry);

module.exports = router;

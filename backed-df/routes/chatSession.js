const express = require('express');
const router = express.Router();
const chatSessionController = require('../controllers/chatSessionController');

// Routes for chat sessions
router.get('/', chatSessionController.getAllSessions);
router.get('/:id', chatSessionController.getSessionById);
router.post('/', chatSessionController.createSession);
router.put('/:id', chatSessionController.updateSession);
router.delete('/:id', chatSessionController.deleteSession);

module.exports = router;

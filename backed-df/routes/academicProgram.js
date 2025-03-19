const express = require('express');
const router = express.Router();
const academicProgramController = require('../controllers/academicProgramController');

// Routes for academic programs
router.get('/', academicProgramController.getAllPrograms);
router.get('/:id', academicProgramController.getProgramById);
router.post('/', academicProgramController.createProgram);
router.put('/:id', academicProgramController.updateProgram);
router.delete('/:id', academicProgramController.deleteProgram);

module.exports = router;

const AcademicProgram = require('../models/AcademicProgram');

exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await AcademicProgram.find().sort({ name: 1 });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProgramById = async (req, res) => {
  try {
    const program = await AcademicProgram.findById(req.params.id);
    
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProgram = async (req, res) => {
  try {
    const program = new AcademicProgram(req.body);
    await program.save();
    
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const program = await AcademicProgram.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    
    res.status(200).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProgram = async (req, res) => {
  try {
    const program = await AcademicProgram.findByIdAndDelete(req.params.id);
    
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    
    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

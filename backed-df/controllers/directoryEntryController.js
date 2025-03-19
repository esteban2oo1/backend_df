const DirectoryEntry = require('../models/DirectoryEntry');

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await DirectoryEntry.find().sort({ name: 1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const entry = await DirectoryEntry.findById(req.params.id);
    
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEntry = async (req, res) => {
  try {
    const entry = new DirectoryEntry(req.body);
    await entry.save();
    
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entry = await DirectoryEntry.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entry = await DirectoryEntry.findByIdAndDelete(req.params.id);
    
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

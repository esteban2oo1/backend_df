const LibraryResource = require('../models/LibraryResource');

exports.getAllResources = async (req, res) => {
  try {
    const resources = await LibraryResource.find().sort({ title: 1 });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResourceById = async (req, res) => {
  try {
    const resource = await LibraryResource.findById(req.params.id);
    
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createResource = async (req, res) => {
  try {
    const resource = new LibraryResource(req.body);
    await resource.save();
    
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const resource = await LibraryResource.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    
    res.status(200).json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const resource = await LibraryResource.findByIdAndDelete(req.params.id);
    
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

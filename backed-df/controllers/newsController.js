const News = require('../models/News');

exports.getAllNews = async (req, res) => {
  try {
    const { page = 1, limit = 10, highlighted } = req.query;
    
    const query = {};
    if (highlighted === 'true') {
      query.isHighlighted = true;
    }
    
    const news = await News.find(query)
      .sort({ publishDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      
    const count = await News.countDocuments(query);
    
    res.status(200).json({
      news,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

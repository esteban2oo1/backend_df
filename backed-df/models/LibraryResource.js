const mongoose = require('mongoose');

const LibraryResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  resourceType: { type: String, required: true, enum: ['book', 'article', 'journal', 'thesis', 'other'] },
  fileUrl: { type: String },
  externalLink: { type: String },
  publicationDate: { type: Date },
  publisher: { type: String },
  tags: [String],
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LibraryResource', LibraryResourceSchema);

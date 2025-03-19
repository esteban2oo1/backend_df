const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  department: { type: String, required: true },
  contactPerson: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  location: { type: String },
  serviceHours: { type: String },
  requiresAppointment: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', ServiceSchema);

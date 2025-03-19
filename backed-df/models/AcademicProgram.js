const mongoose = require('mongoose');

const AcademicProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: String, required: true }, // 'Technologist' or 'Professional'
  duration: { type: String, required: true },
  credits: { type: Number, required: true },
  curriculum: [{ 
    semester: Number,
    courses: [{
      name: String,
      credits: Number,
      description: String
    }]
  }],
  admissionRequirements: [String],
  tuition: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AcademicProgram', AcademicProgramSchema);

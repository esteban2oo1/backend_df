const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicProgram', required: true },
  status: { type: String, required: true, enum: ['draft', 'submitted', 'under_review', 'accepted', 'rejected'] },
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    idNumber: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true }
  },
  academicHistory: [{
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    gpa: { type: Number }
  }],
  documents: [{
    name: { type: String, required: true },
    fileUrl: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now }
  }],
  paymentStatus: { type: String, enum: ['pending', 'completed', 'waived'] },
  submissionDate: { type: Date },
  decisionDate: { type: Date },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);

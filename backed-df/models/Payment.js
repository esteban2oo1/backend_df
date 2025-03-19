const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  concept: { type: String, required: true, enum: ['tuition', 'enrollment', 'certificate', 'other'] },
  paymentMethod: { type: String, required: true },
  transactionId: { type: String, required: true },
  status: { type: String, required: true, enum: ['pending', 'completed', 'failed', 'refunded'] },
  paymentDate: { type: Date, default: Date.now },
  details: { type: Object },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);

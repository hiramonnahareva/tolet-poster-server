const mongoose = require('mongoose');
const PinSchema = new mongoose.Schema({
  userId: String, // Replace with ObjectId if you add auth
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});
module.exports = mongoose.model('Pin', PinSchema); 
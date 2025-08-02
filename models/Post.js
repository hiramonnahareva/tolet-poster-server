const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  contactInfo: String,
  location: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
}); 

module.exports = mongoose.model('Post', PostSchema);  
const express = require('express');
const router = express.Router();
const Pin = require('../models/Pin');
const Post = require('../models/Post');

// Get all pinned posts for a user (replace 'user1' with real user id)
router.get('/', async (req, res) => {
  const pins = await Pin.find({ userId: 'user1' }).populate('postId');
  res.json(pins.map(pin => pin.postId));
});

// Pin a post
router.post('/', async (req, res) => {
  const { postId } = req.body;
  const pin = new Pin({ userId: 'user1', postId });
  await pin.save();
  res.json({ success: true });
});

// Unpin a post
router.delete('/:id', async (req, res) => {
  await Pin.deleteOne({ userId: 'user1', postId: req.params.id });
  res.json({ success: true });
});

module.exports = router; 
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

module.exports = router; 
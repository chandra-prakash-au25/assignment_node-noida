const posted = require("../model/blog");
const router = require("express").Router();


// Get All posts
const post_all = async (req, res) => {
  console.log('hhhhhh')
    try {
        const posts = await posted.find();
        res.json(posts);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single post
const post_details = async (req,res) => {
    try {
        console.log(req.params.postId)
        const post = await posted.findById(req.body.postId);
        res.json(post);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New post
const post_create = async (req, res) => {
    console.log(req.file,'tyuio')
    const userspost = new posted({
        title: req.body.title,
        post: req.body.data,
        image: req.file.path,
      });
    
      try {
        const savedPost = await userspost.save();
        res.send(savedPost);
      } catch (error) {
        res.status(400).send(error);
      }
};



// Delete post
const post_delete = async (req, res) => {
    try {
        const r_post = await posted.findByIdAndDelete(req.body.postId);
        res.json(r_post);
      } catch (error) {
        res.json({ message: error });
      }
};



module.exports = {
    post_all, 
    post_details, 
    post_create, 
    post_delete
  }
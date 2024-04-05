const express = require("express");
const { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog, getBlogsByCategory } = require("../controller/blogController");

const router = express.Router();

router.get('/blogByCategory/:cat',getBlogsByCategory);
router.get('/blogs',getAllBlogs);
router.get('/blogs/:id',getBlogById);
router.post('/blogs',createBlog);
router.put('/blogs/:id',updateBlog);
router.delete('/blogs/:id',deleteBlog);

module.exports = router
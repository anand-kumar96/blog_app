const BlogRepo = require("../repository/blogRepository");

exports.getAllBlogs = async(req,res) => {
    const blogs = await BlogRepo.find();
    res.json({data:blogs});
}
exports.getBlogsByCategory = async(req,res) => {
    const {cat} = req.params
    const blogs = await BlogRepo.findByCategory(cat);
    res.json({data:blogs});
}

exports.getBlogById = async(req,res) => {
    const id = req.params.id;
    const blog = await BlogRepo.findById(id);
    
    if(blog) {
        res.json({data:blog});
    } else{
        res.send({message:'blog not found'})
    }
}

exports.createBlog = async(req,res) => {
    const{title,imageUrl,description,category} = req.body;
    const blog = await BlogRepo.create(title,imageUrl,description,category);
    res.json({data: blog})
}

exports.updateBlog = async(req,res) => {
    const{title,imageUrl,description,category} = req.body;
    const id = req.params.id;
    const blog = await BlogRepo.update(id,title,imageUrl,description,category);
    if(blog) {
        res.json({data:blog});
    } else {
        res.send({message:'blog not found'})
    }
}

exports.deleteBlog = async(req,res) => {
    const id = req.params.id;
    const blog = await BlogRepo.delete(id);

    if(blog) {
       res.json({data:blog});
    } else {
        res.send({message:'blog not found'})
    }
}


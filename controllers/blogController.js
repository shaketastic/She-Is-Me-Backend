const express = require("express");
const blogs = express.Router();
const { getAllBlogs, getBlogs, createBlog, deleteBlog, updateBlog} = require('../queries/blogs');

blogs.get("/", async ( req, res ) => {
    const allBlogs = await getAllBlogs();
    if(allBlogs[0]) {
        res.status(200).json(allBlogs);
    } else {
        res.status(500).json({ error: "server error" });
    }
});


blogs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const blogs = await getBlogs(id);

    if(blogs) {
        res.json(blogs);
    } else {
        res.status(404).json({ error: "Sorry! This story was not found" })
    }
});

blogs.post('/', async (req, res) => {
    const newBlog = req.body;

    try {
        const addedBlog = await createBlog(newBlog);
        res.status(200).json(addedBlog)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});
   
blogs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const removed = await deleteBlog(id);
    if(removed) {
        res.status(200).json(removed);
    } else {
        res.status(404).json({ error: "Sorry! This story was not found" });
    }
});

blogs.put('/:id', async (req, res) => {
    const { id } = req.params;
        const updatedBlog = await updateBlog(id, req.body);
        res.status(200).json(updatedBlog);   
});




module.exports = blogs; 
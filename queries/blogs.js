const db = require("../db/dbConfig.js");


const getAllBlogs = async () => {
  try {
    const allBlogs = await db.any("SELECT * FROM blogs");
    return allBlogs;
  } catch (error) {
    return error;
  }
};

const getBlogs = async (id) => {
  try {
      const blog = await db.one("SELECT * FROM blogs WHERE id=$1", id);  
      return blog;
  } catch (error) {
      return error;
  }
};

const createBlog = async (blog) => {
  try {
      const newBlog = await db.one("INSERT INTO blogs (title, name, age, content, created_at, is_anonymous) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [blog.title, blog.name, blog.age, blog.content, blog.created_at, blog.is_anonymous]);
      return newBlog;
  } catch (error) {
      return error;
  };
};

const deleteBlog = async (id) => {

  try {
      const removed = await db.one("DELETE FROM blogs WHERE id=$1 RETURNING *", id);
      return removed;
  } catch (error) {
      return error;
  };
};

const updateBlog = async (id, blog) => {

  try {
      const updatedBlog = await db.any(
      "UPDATE blogs SET title=$1, name=$2, age=$3, content=$4, created_at=$5, is_anonymous=$6, where id=$7 RETURNING *",
      [blog.title, blog.name, blog.age, blog.content, blog.created_at, blog.is_anonymous, id]
      );
      return updatedBlog;
  } catch (error) {
      return error;
  };
};


module.exports = {
  getAllBlogs, 
  getBlogs, 
  createBlog, 
  deleteBlog, 
  updateBlog
};

// const { getAllBlogs, getBlogs, createBlog, deleteBlog, updateBlog} = require('../queries/blogs');
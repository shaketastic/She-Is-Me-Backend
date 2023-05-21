// BACK-END APP
const express = require("express");
const blogs = require("./controllers/blogController.js");
const blogsController = require("./controllers/blogsController.js");
const app = express();

// middleware
app.use(express.json());  // parsing incoming data

// routes
app.use("/blogs", blogsController);

app.get("/", (req, res) => {
    res.send("Welcome to She Is Me App");
})

module.exports = app;
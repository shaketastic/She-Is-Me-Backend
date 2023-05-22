// BACK-END APP
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan")

const blogs = require("./controllers/blogController.js");
const blogsController = require("./controllers/blogsController.js");


// middleware
app.use(express.json());  // parsing incoming data

// routes
app.use("/blogs", blogController);

app.get("/", (req, res) => {
    res.send("Welcome to She Is Me App");
})

module.exports = app;
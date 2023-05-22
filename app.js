// BACK-END APP
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

// middleware
app.use(express.json());  // parsing incoming data
app.use(cors());

app.use(logger('dev'));

const blogController = require("./controllers/blogController.js");
app.use("/blogs", blogController);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to She Is Me App");
});

app.get("*", ( req, res ) => {
    res.status(404).json( { error: "Sorry! Page not found" } )
});

module.exports = app;
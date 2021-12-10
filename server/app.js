const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const app = express();

const routes = require('./routes');

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
// enable cors
app.use(cors());
app.options("*", cors());

module.exports = app;

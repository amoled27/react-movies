const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

module.exports = app;

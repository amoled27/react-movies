const express = require('express');
const controller = require('../controllers');
const router = express.Router();


router.route('/movies').get(controller.getMovies);
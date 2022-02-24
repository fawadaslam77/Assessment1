const express = require('express');

const fs = require('fs');


const router = express.Router();

const BlogController = require('../controllers/BlogController');

router.get('/',BlogController.getAllBlogs);

module.exports = router;

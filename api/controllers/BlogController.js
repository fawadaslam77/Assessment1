const Blog = require('../models/BlogModel');
const BaseController= require('../controllers/BaseController');

module.exports.getAllBlogs = BaseController.get(Blog);







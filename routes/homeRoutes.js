const router = require('express').Router();

const homeController = require('../controllers/homeController');

// For HomePage
router.get('/',homeController.getAllPosts);
router.get('/post/:id',homeController.getSinglePost);



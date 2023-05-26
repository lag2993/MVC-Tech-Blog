// Import required dependencies
const router = require('express').Router();

// Import main routes
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const dashRoutes = require('./dashRoutes');

// Define routes for the landing page, APIs, and various modules
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard',dashRoutes);



// Export the router for use in other modules
module.exports = router;

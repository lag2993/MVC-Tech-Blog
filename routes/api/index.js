// Import Routes for API DATABASE
const router = require('express').Router();
const userRoutes = require('./userRoutes');


// User-related routes
router.use('/user', userRoutes);


// Export the router for use in other modules
module.exports = router;

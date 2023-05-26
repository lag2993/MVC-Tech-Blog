const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Import required route modules
const routes = require('./routes');
// Import the Sequelize connection configuration
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const apiRoutes = require('./controllers/api/index.js');
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Apply session middleware to the app
app.use(session(sess));

// Apply body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
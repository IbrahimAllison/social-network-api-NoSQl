const express =  require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Codes for setting up Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing for incoming requests
app.use(routes); 

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`The API server running on port ${PORT}!`);
    });
  });
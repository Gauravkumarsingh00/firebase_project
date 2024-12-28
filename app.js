const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('', routes);

// Render the HTML form at the root route
app.get('/', (req, res) => {
  res.render('index'); // Render the 'index.ejs' template
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

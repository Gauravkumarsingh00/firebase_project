const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Explicitly set the views directory

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', routes);

app.get('/', (req, res) => {
  res.render('index');
});

// Export the app for Vercel
module.exports = app;

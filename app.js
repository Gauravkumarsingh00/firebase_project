const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', routes);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

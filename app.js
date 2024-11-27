// app.js
const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
var expressLayouts = require('express-ejs-layouts');


var adminRoute = require('./routes/admin');
var usersRoute = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/admin-layout');


// Route to handle the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Coinnaires!');
});

// Start the server
app.listen(port, () => {
  console.log(`Coinnaires app is running at http://localhost:${port}`);
});

const express = require('express');

const contactRoutes = require('./api-routes/contactRoutes');

const app = express();

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json()); // conectar cpn mongose

app.use('/contact', contactRoutes);

module.exports = app;

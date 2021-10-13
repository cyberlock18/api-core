const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const contactRoutes = require('./api-routes/contactRoutes');

const app = express();

const db = mongoose.connection;

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json()); // conectar cpn mongose
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

if (!db)   {console.log("Error connecting db")};
else{console.log("Db connected successfully")};

const port = process.env.PORT || 8080;

app.use('/', contactRoutes);

app.listen(port, () => {
  console.log(`Running RestHub on port ${  port}`);
});

module.exports = app;

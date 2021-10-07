const express = require('express');


const  bodyParser = require('body-parser');
const  mongoose = require('mongoose');

const contactRoutes = require("./api-routes/contactRoutes"):
const apiRutes = require("./api-routes/apiRoutes");

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); //conectar cpn mongose
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
console.log("Error connecting db")
else
    console.log("Db connected successfully")

const port = process.env.PORT || 8080;

app.get('/', (req, res));
app.use('/api', apiRoutes);
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});


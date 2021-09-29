const express = require('express');
const mainrouter = require('./routers/router');
const app = express();
const port = process.env.PORT || 8080;
app.use('/api',mainrouter);
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
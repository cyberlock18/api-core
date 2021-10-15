const mongoose = require('mongoose');
const app = require('./app');
// puerto api
const PORT = process.env.PORT || 8080;
const db = process.env.MONGODB || 'mongodb://localhost:27017/api';

// si no es posible conectar con el servidor mandar mensaje.
mongoose.connect(db, { useNewUrlParser: true }, (err) => {
  if (err) console.log(`Database unabler to conect. Error: ${err}`);
  else app.listen(PORT, () => { console.log(`Node server running on http://localhost:${PORT}`); });
});

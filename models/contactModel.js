const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  surname: {
    type: String,
    require: true,
  },

  age: {
    type: Number,
    require: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: { type: Number },
  create_date: {
    type: Date,
    default: Date.now,
  },

});
module.exports = mongoose.model('contact', contactSchema);
/* exportar models */

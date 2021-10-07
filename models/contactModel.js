const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{ type:Number } ,
    create_date: {
        type: Date,
        default: Date.now
    }
}
var Contact = module.exports = mongoose.model('contact', contactSchema);

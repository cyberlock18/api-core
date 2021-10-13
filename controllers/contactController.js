const Contact = require('../models/contactModel');

// get methods, establecer get con index para saber que hago y con contact para introducir nuevos contactos

function index(req, res) {
  return 'hola';
}
function getContact(req, res) {
  Contact.find({}, (err, ContactData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(ContactData);
  });
}
function getContactUser(req, res) {
  const { ContactUser } = req.params;

  Contact.find({ user: ContactUser }, (err, ContactData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(ContactData);
  });
}

// post
function postContact(req, res){
      /* Coge el request.body con los atributos introducidos y lo guarda save() */

  const auxcontact = new Contact(req.body);

  auxcontact.save((err, newContact) => {
    if (err) return res.status(400).send({ message: 'Error al guardar el contacto', error: err });
    return res.status(200).send(newContact);
  });
} 
}

module.exports = {
  index, getContact, getContactbyUser, postContact
};

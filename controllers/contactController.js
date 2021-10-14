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
    return res.status(200).send(ContactData);
  });
}
function getContactbyUser(req, res) {
  const { ContactUser } = req.params.id;

  Contact.findById({ user: ContactUser }, (err, ContactData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.status(200).send(ContactUser);
  });
}

// post
function postContact(req, res) {
  /* Coge el request.body con los atributos introducidos y lo guarda save() */

  const auxcontact = new Contact(req.body);

  auxcontact.save((err, newContact) => {
    if (err) return res.status(400).send({ message: 'Error al guardar el contacto', error: err });
    return res.status(200).send(newContact);
  });
}
 function updateContacts(req, res) {
   Contact.findById(req.params.id, (err,user) => {
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.email = req.body.email;
    user.age = req.body.age;
    user.password = req.body.password; 
    user.phone = req.body.phone

    Contact.save((err, newContact) => {
      if (err) return res.status(400).send(error);
      return res.status(200).send(newUser);
    });
  });
}
} 

function deleteUsers(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.remove((err) => {
      if (err) return res.status(400).send(err.message);
      res.status(200).send();
    });
  });
}
module.exports = {
  index,  
  getContact,
  getContactbyUser,
  postContact,
  deleteUsers,
  updateContacts,
};

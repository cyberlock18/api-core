const { Router } = require('express');
const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.index);
router.get('/api', contactController.getContact);
router.get('/api:users', contactController.getContactbyUser);
// router.post('/api', contactController.newContact);
router.post('/api', contactController.postContact);
router.post('/api/:users', contactController.updateContacts);
router.delete('/api/:contactsremove', contactController.deleteUsers);
module.exports = router;

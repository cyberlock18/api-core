const { Router } = require('express');
const contactController = require('../controllers/contactController');

const router = Router();

// router.get('/', contactController.index);
router.get('/', contactController.getContact);
router.get('/:userID', contactController.getContactbyUser);
// router.post('/api', contactController.newContact);
router.post('/', contactController.postContact);
router.put('/:userID', contactController.updateContacts);
router.delete('/:userID', contactController.deleteUsers);

module.exports = router;

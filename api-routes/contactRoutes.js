const { Router } = require('express');
const contactController = require('../controllers/contactController');

const router = Router();

router.get('/', contactController.index);
router.get('/api', contactController.getContact);
router.get('/api:users', contactController.getContactbyUser);
// router.post('/api', contactController.newContact);

router.post('/api', contactController.postContact);

module.exports = router;

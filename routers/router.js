let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API ESTA FUNCIONANDO',
        message: 'Welcome to RESTHub crafted with love!'
    }); //modification
});
module.exports = router;
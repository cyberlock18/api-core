const { Router } = require('express');
const router = require('express');

const router = Router();

//RUTA POR DEFECTO
 router.get('/', (req, res) => {
   //devolver json respuesta
  res.json({
    status: 'API ESTA FUNCIONANDO',
    message: 'Bienvenido a la página',
  }); // modificacion
});

module.exports = router;

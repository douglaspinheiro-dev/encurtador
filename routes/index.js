const express = require('express');
const router = express.Router();
const encurtadorController = require('../components/encurtador/controller')
/* GET users listing. */
router.post('/encurtador',encurtadorController.salvar);
router.get('/:newUrl',encurtadorController.selecionar);

module.exports = router;

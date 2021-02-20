const express = require('express');
const router = express.Router();
const encurtadorController = require('../components/encurtador/controller')
/* GET users listing. */
router.get('/',encurtadorController.salvar);

module.exports = router;

const express = require('express');
const router = express.Router();
const encurtadorController = require('./controller')

router.post('/encurtador',encurtadorController.salvar);

module.exports = router;

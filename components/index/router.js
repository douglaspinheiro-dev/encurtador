const express = require('express');
const router = express.Router();

const encurtadorController = require('../encurtador/controller')
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:newUrl',encurtadorController.selecionar);


module.exports = router;

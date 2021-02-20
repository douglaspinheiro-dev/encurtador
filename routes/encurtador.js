var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // retornar json { newUrl: "http://localhost:8081/abc123ab"; }
});

module.exports = router;

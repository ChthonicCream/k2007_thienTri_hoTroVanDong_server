var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('./views/index copy.html', { root: 'public' });
});

module.exports = router;

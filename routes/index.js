var express = require('express');
var router = express.Router();
const path = require("path");

const indexFile = path.join(__dirname, "../public/views/index copy.html");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(indexFile);
});

module.exports = router;

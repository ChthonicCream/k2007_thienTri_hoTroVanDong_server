var express = require('express');
var router = express.Router();
const path = require("path");

const indexFile = path.join(__dirname, "../public/views/index copy.html");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(indexFile);
});

router.post('/data', function(req, res, next) {
  let data=req.body;
  const { name, org, remarks} = data;
  console.log(name);
  console.log(org);
  console.log(remarks);
  res.redirect("/");
});

module.exports = router;

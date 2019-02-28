var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Getting Index");
  res.render('index', { pageCountMessage : 1, dbInfo: "db" });
});

module.exports = router;

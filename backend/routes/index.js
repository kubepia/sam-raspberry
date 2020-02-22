var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200)
      .type("html")
      .send("bff");
});

router.get("/health", function(req, res, next) {
  res.status(200)
      .type("html")
      .send("bff");
});

module.exports = router;

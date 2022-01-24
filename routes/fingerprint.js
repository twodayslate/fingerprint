var express = require('express');
var router = express.Router();

/* GET fingerprint page. */
router.get('/fingerprint', function(req, res, next) {
  res.json(req.fingerprint)
});

module.exports = router;

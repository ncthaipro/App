var express = require('express');
var router = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World. I');
});

router.listen('3000',() => console.log('Example hello world is running'))

module.exports = router;

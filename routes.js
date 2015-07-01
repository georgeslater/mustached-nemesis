var express = require('express');
var router = express.Router();

router.index = function(req, res){

	res.render('index', {title: 'Pupdate', counter: 10});
};

module.exports = router;
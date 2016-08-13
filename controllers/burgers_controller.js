var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var burgerObject = { burgers: data };
		res.render('index', burgerObject);
	});
});

router.post('/burgers/create', function (req, res) {
	console.log('hola');
	console.log(req.body);
	console.log(req.body.burgerName);
	console.log("hola controllerjs");
	burger.insertOne(req.body.burgerName, function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update', function (req, res) {
	burger.updateOne(req.body.id, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
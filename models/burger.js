var orm = require('../config/orm.js');

var burger = {
	selectAll: function (callback){
		orm.selectAll(function(res){
			callback(res);
		});
	},
	insertOne: function(burgerName, callback){
		orm.insertOne(burgerName, function(res){
			callback(res);
		});
	},
	updateOne: function(idNumber, callback){
		orm.updateOne(idNumber, function(res){
			callback(res);
		});
	}
};

module.exports = burger;
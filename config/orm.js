// Import (require) connection.js into orm.js
var connection = require ('../config/connection.js');

// create the methods that will execute the necessary MySQL commands 
// in the controllers, to retrieve and store data in your database.
// selectAll()  insertOne()  updateOne() 
var orm = {
	selectAll: function (callback) {
		var queryString = 'SELECT * FROM burgers';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			console.log(result);
			callback(result);
		});
	},
	insertOne: function(burgerName, callback) {
		console.log('Hola ormjs')
		var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
		console.log(queryString);
		connection.query(queryString, burgerName, function (err,result){
			if (err) throw err;
			console.log(result);
			callback(result);
		});
	},
	updateOne: function(idNumber, callback) {
		var queryString = 'UPDATE burgers SET devoured = true WHERE id = ' + idNumber;
		connection.query(queryString,function(err,result){
			if (err) throw err;
			console.log(result);
			callback(result);
		});
	}
};

// Export the ORM object in module.exports.
module.exports = orm;
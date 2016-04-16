var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		},
		porte: {
			type: String,
			required: true
		},
		url: {
			type: String
		}
	});

	return mongoose.model('Loja',schema);
};
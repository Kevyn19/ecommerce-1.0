var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		imagem : {
			type: String,
			required: true
		},
		loja:{
			type: String
		}
	
	});

	return mongoose.model('Carrossel',schema);
};
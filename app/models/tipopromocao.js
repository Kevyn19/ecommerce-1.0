var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({

	  tipoPromocao : { type: String }, 


	});

	return mongoose.model('TipoPromocao',schema);
};
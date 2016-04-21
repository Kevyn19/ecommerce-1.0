var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({

	  nome :{ type: String },

	  tipoPromocao : { type: String }, 

	  bilhetePromocional : { 

	  	nome :{ type: String },

	   },
	 
	  procentagemAcimaValor : { 
	  		valor :{ type: Number },
	  		porcentagem : { type: Number }
	  },

	  brinde :  { 
	  	nome : { type: String },
	  	idProduto : { type: Number } 

	  },

	  dataIni : { 
	  	type: Date,
		default: Date.now 
		
	  },

	  dataFim : { type: Date },

	  porcentagem : { type: Number },

	  freteFree : { type: Number }

	});

	return mongoose.model('Promocao',schema);
};
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

	  fretePorcentagemAcima : { 
	  		valor :{ type: Number },
	  		porcentagem : { type: Number }
	  },

	  brinde :  { 
	  	nome : { type: String },
	  	idProduto : { type: Number } 

	  },

	  dataIni : { type: String },

	  dataFim : { type: String },

	  porcentagem : { type: Number },

	  freteFree : { type: Number },

	  fretePorcentagem : { type: Number }

	});

	return mongoose.model('Promocao',schema);
};
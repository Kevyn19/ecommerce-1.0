var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({

	  nome :{ type: String },

	  descricao :{ type: String },

	  preco : { type: Number },

	  data:{ type: String },

	  publicoalvo : { 
	  		sexo : { type: String },
	  		faixaetaria: { type: String }
	  },

	  tipoproduto : { 
	  		categoria:{ type: String },
	  		subcategoria: { type: String }
	  },

	  cor : { 
	  		nome : { type: String },
	  		hexa : { type: String }
	   },

	   bihetePromocao : {
	   		nome : { type: String },
	   		ativo : { type: Number },
	   		porcentagem : { type: Number }

	   },

	   promocao : {
	   		dataIni : { type: String },
	   		dataFim : { type: String },
	   		porcentagem : { type: Number }

	   },


	  marca : { type: String },

	  estoque: { type: Number },

	});

	return mongoose.model('Produtos',schema);
};
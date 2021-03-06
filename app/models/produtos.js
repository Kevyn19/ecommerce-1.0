var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({

	  idProduto : {type: Number},

	  nome :{ type: String },

	  descricao :{ type: String },

	  preco : { type: Number },

	  data:{ type: String },

	  foto: { type: String },

	  menu: { type: String },

	  loja: { type: String },

	  cep : { type: String },

	  peso: { type: String },

	  formato: { type: Number },

	  comprimento: { type: Number },

	  altura: { type: Number },

	  largura: { type: Number },

	  diametro : { type: Number }, 

	  valorDeclarado : { type: Number }, 

	  tipoproduto : { 
	  		categoria:{ type: String },
	  		subcategoria: { type: String }
	  },

	  cor : { 
	  		nome : { type: String },
	  		hexa : { type: String }
	   },

	   promocao : {
	   		nome : { type: String },
	   		tipo : { type: String }
	   },


	  marca : { type: String },

	  estoque: { type: Number },

	});

	return mongoose.model('Produtos',schema);
};
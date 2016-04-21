var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({

	  nomeProduto: { type: String },

	  idProduto: { type: Number },

	  quantidade: { type: Number },

	  fotoProduto: { type: String },

	  preco: { type: Number },

	  precoPromocao: { type: Number },

	  loja: { type: String },

	  cep : { type: String },

	  user : { type: String },

	  data : { type: Date }

	});

	return mongoose.model('Carrinho',schema);
};

var sanitize = require('mongo-sanitize');


module.exports = function (app){
	var Carrinho = app.models.carrinho;
	var controller = {}


	

	//Quantidade total de produtos no carrinho
	controller.quantidadeCarrinho = function(req,res){
		var qtd = 0;
		console.log(req.params);
		Carrinho.find({'user' : req.params.user, 'data' : req.params.data},{'quantidade' : 1}).exec()
		.then(
			function(carrinho){
				for (var i = 0; i < carrinho.length; i++) {
					qtd = qtd + carrinho[i].quantidade;
				}
			    res.json(qtd);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	//Soma valor dos produtos no carrinho
	controller.SomaValorCarrinho = function(req,res){
		var valor = 0;
		console.log(req.params);
		Carrinho.find({'user' : req.params.user, 'data' : req.params.data},{'preco' : 1, 'quantidade' : 1}).exec()
		.then(
			function(carrinho){
				for (var i = 0; i < carrinho.length; i++) {
					valor = valor + (carrinho[i].preco * carrinho[i].quantidade);
				}
			    res.json(valor);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	//Lista produtos no carrinho
	controller.listaCarrinho = function(req,res){
		Carrinho.find({'user' : req.params.user, 'data' : req.params.data} ).exec()
		.then(
			function(carrinho){
			    res.json(carrinho);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	//Pega carrinho por id
	controller.obtemCarrinho = function(req,res){
		var _id = req.params.id;
		Carrinho.findById(_id).exec().then(
			function (carrinho){
				if(!carrinho) throw new Error("Carrinho não encontrado!");
				res.json(carrinho);
			},function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	//Remover o carrinho
	controller.removeCarrinho = function(req,res){
		var _id = sanitize(req.params.id);
		Carrinho.remove({"_id":_id}).exec()
		.then(
			function(){
				res.status(204).end();
			},function(erro){
				return console.error(erro);
			}
		);
	};

	// Criar/alterar
	controller.salvaCarrinho = function(req,res){
		var _id = req.body._id;

		var dados = {
			  "nomeProduto": req.body.nomeProduto,

			  "idProduto" : req.body.idProduto,

			  "quantidade" : req.body.quantidade,

			  "fotoProduto": req.body.fotoProduto,

			  "preco": req.body.preco,

			  "precoPromocao": req.body.precoPromocao,

			  "loja" : req.body.loja,

	 		  "cep" : req.body.cep,

			  "user" : req.body.user,

			  "data" : req.body.data

		};

		if(_id){
			Carrinho.findByIdAndUpdate(_id, dados).exec().then(
				function (carrinho){
					res.json(carrinho);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Carrinho.create(dados).then(
				function(carrinho){
					res.status(201).json(carrinho)
				},
				function(erro){
					console.log("erro! "+erro);
					res.status(500).json(erro)
				}
			);

		}
	};

	return controller;
};
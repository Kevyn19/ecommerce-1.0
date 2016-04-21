
var sanitize = require('mongo-sanitize');

module.exports = function (app){
	var Loja = app.models.loja;
	var Produtos = app.models.produtos;
	var controller = {}
	
	//Lista a loja 
	controller.listaLoja = function(req,res){
		Loja.find({'loja' : req.params.loja}).exec()
		.then(
			function(loja){
			    res.json(loja);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	//Atualiza a loja
	controller.updateLoja = function(req,res){

		Loja.update({ 'nome' : req.body.loja},{ $set: { 'nome': req.body.lojaNovo }}, {multi: true}).exec()
		.then(
			function(loja){
				Produtos.update({ 'loja' : req.body.loja},{ $set: { 'loja': req.body.lojaNovo }}, {multi: true}).exec()
				.then(
					function(produtos){
						res.json(produtos);
					},
					function(erro){
					   console.log(erro);
					   res.status(500).json(erro);
				}
			  );
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );

	};

	// Criar/Alterar loja
	controller.salvaLoja = function(req,res){
		var _id = req.body._id;

		var dados = {
			"nome": req.body.nome,

			"porte": req.body.porte,

			"url" : req.body.url,

			"cep" : req.body.cep

		};

		if(_id){
			Loja.findByIdAndUpdate(_id, dados).exec().then(
				function (loja){
					res.json(loja);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Loja.create(dados).then(
				function(loja){
					res.status(201).json(loja)
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
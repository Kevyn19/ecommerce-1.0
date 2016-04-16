
var sanitize = require('mongo-sanitize');

module.exports = function (app){
	var Carrossel = app.models.carrossel;
	var controller = {}
	

	controller.listaCarrossel = function(req,res){
		Carrossel.find({'loja' : req.params.loja}).exec()
		.then(
			function(carrossel){
			    res.json(carrossel);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	controller.salvaCarrossel = function(req,res){
		var _id = req.body._id;

		var dados = {
			"imagem": req.body.imagem,

			"loja": req.body.loja

		};

		if(_id){
			Carrossel.findByIdAndUpdate(_id, dados).exec().then(
				function (carrossel){
					res.json(carrossel);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Carrossel.create(req.body).then(
				function(carrossel){
					res.status(201).json(carrossel)
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
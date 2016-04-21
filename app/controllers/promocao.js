
var sanitize = require('mongo-sanitize');

module.exports = function (app){
	var Promocao = app.models.promocao;
	var controller = {}
	

	controller.listaPromocao = function(req,res){
		Promocao.find({'nome' : req.params.nome}).exec()
		.then(
			function(promocao){
			    res.json(promocao);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	controller.salvaPromocaoFreteFree = function(req,res){
		var _id = req.body._id;

		var dados = {
			

			  "nome" :req.body.nome,

			  "tipoPromocao" : req.body.nome,  

			  "dataFim" : req.body.dataIni, 

			  "freteFree" : req.body.freteFree

		};

		if(_id){
			Promocao.findByIdAndUpdate(_id, dados).exec().then(
				function (promocao){
					res.json(promocao);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Promocao.create(req.body).then(
				function(promocao){
					res.status(201).json(promocao)
				},
				function(erro){
					console.log("erro! "+erro);
					res.status(500).json(erro)
				}
			);

		}
	};


	controller.salvaPromocaoPorcentagemValor = function(req,res){
		var _id = req.body._id;

		var dados = {
			

			  "nome" :req.body.nome,

			  "tipoPromocao" : req.body.nome,  

			  "dataFim" : req.body.dataIni, 

			  "porcentagem" : req.body.porcentagem

		};

		if(_id){
			Promocao.findByIdAndUpdate(_id, dados).exec().then(
				function (promocao){
					res.json(promocao);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Promocao.create(req.body).then(
				function(promocao){
					res.status(201).json(promocao)
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
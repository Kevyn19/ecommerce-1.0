
var sanitize = require('mongo-sanitize');

module.exports = function (app){
	var Tipopromocao = app.models.tipopromocao;
	var controller = {}


	//Lista tipo promocao
	controller.listaTipopromocao = function(req,res){
		Tipopromocao.find().exec()
		.then(
			function(tipopromocao){
			    res.json(tipopromocao);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	//Pega tipo promocao por id
	controller.obtemTipopromocao = function(req,res){
		var _id = req.params.id;
		Tipopromocao.findById(_id).exec().then(
			function (tipopromocao){
				if(!tipopromocao) throw new Error("Tipopromocao não encontrado!");
				res.json(tipopromocao);
			},function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	//Remover tipo promocao
	controller.removeTipopromocao = function(req,res){
		var _id = sanitize(req.params.id);
		Tipopromocao.remove({"_id":_id}).exec()
		.then(
			function(){
				res.status(204).end();
			},function(erro){
				return console.error(erro);
			}
		);
	};

	// Criar/alterar tipo promocao
	controller.salvaTipopromocao = function(req,res){
		var _id = req.body._id;

		var dados = {

		  "tipoPromocao" :  req.body.tipoPromocao

		};

		if(_id){
			Tipopromocao.findByIdAndUpdate(_id, dados).exec().then(
				function (tipopromocao){
					res.json(tipopromocao);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Tipopromocao.create(dados).then(
				function(tipopromocao){
					res.status(201).json(tipopromocao)
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
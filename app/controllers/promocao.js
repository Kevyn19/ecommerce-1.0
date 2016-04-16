
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

	controller.salvaPromocao = function(req,res){
		var _id = req.body._id;

		var dados = {
			

			  "nome" :req.body.nome,

			  "tipoPromocao" : req.body.nome, 

			  "bilhetePromocional" : { 

				  	"nome" : req.body.bilhete.nome,

			   },
			 
			  "procentagemAcimaValor" : { 
			  		"valor" :  req.body.procentagemAcimaValor.valor, 
			  		"porcentagem" :  req.body.procentagemAcimaValor.porcentagem, 
			  },

			  "fretePorcentagemAcima" : { 
			  		valor : req.body.fretePorcentagemAcima.valor, 
			  		porcentagem : req.body.fretePorcentagemAcima.porcentagem, 
			  },

			  "brinde" :  { 
			  	"nome" : req.body.brinde.nome, 
			  	"idProduto" : req.body.idProduto, 

			  },

			  "dataIni" : req.body.dataIni, 

			  "dataFim" : req.body.dataIni, 

			  "porcentagem" : req.body.porcentagem, 

			  "freteFree" : req.body.freteFree, 

			  "fretePorcentagem" :req.body.fretePorcentagem, 

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
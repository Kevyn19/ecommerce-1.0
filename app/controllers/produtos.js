
var sanitize = require('mongo-sanitize');

module.exports = function (app){
	var Produtos = app.models.produtos;
	var controller = {}
	



	controller.listaProdutos = function(req,res){
		Produtos.find().exec()
		.then(
			function(produtos){
				console.log("ni");
			    res.json(produtos);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	controller.listaNomeProdutosCor = function(req,res){
		console.log(req.params);
		Produtos.findOne({'cor.nome': req.params.cor},{'cor.nome':1,'cor.hexa':1}).exec()
		.then(
			function(produtos){
				console.log("ni");
			    res.json(produtos);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	controller.CountProdutosCor = function(req,res){

		Produtos.count({ 'cor.nome' : req.params.cor }).exec()
		.then(
			function(produtos){
				console.log("ni");
			    res.json(produtos);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	controller.listaNomeProdutosMarca = function(req,res){
		console.log(req.params);
		Produtos.findOne({'marca': req.params.marca},{'marca':1}).exec()
		.then(
			function(produtos){
				console.log("ni");
			    res.json(produtos);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};

	controller.CountProdutosMarca = function(req,res){

		Produtos.count({ 'marca' : req.params.marca }).exec()
		.then(
			function(produtos){
				console.log("ni");
			    res.json(produtos);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};


	controller.listaProdutosCor = function(req,res){
		var cores = req.params.cor.split(";");
	
			console.log(cores);
			Produtos.find({'cor.nome': { $in:cores}}).exec()
			.then(
				function(produtos){
					console.log("ni");
				    res.json(produtos);
				   
				},
				function(erro){
				   console.log(erro);
				   res.status(500).json(erro);
			}
		);	
	
	}



	/*controller.listaProdutos = function(req,res){
		Produtos.find({'cor.nome':'azul'},{'nome':1}).exec()
		.then(
			function(produtos){
				console.log("ni");
			    res.json(produtos);
			},
			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );
	};*/



	controller.salvaProdutos = function(req,res){
		var _id = req.body._id;

		var dados = {

			"nome": req.body.nome,

			"descricao": req.body.descricao,

			"preco": req.body.preco,

			"data": req.body.data,

			"publicoalvo": {
				"sexo" : req.body.publicoalvo.sexo,
				"faixaetaria" : req.body.publicoalvo.faixaetaria
			}, 

			"tipoproduto" : {
				"categoria": req.body.tipoproduto.categoria,
	  			"subcategoria" : req.body.tipoproduto.categoria
			},

			"cor" : {
				"nome" : req.body.cor.nome,
	  			"hexa" : req.body.cor.hexa
			},

			"bihetePromocao" : {
				"nome" : req.body.bihetePromocao.nome,
		   		"ativo" : req.body.bihetePromocao.ativo,
		   		"porcentagem" : req.body.bihetePromocao.porcentagem
			},

			"promocao" : {
		   		"dataIni" : req.body.promocao.dataIni,
		   		"dataFim" : req.body.promocao.dataFim,
		   		"porcentagem" : req.body.promocao.porcentagem
	   		},

	   		 "marca" : req.body.marca,

	  		 "estoque": req.body.marca


		};

		if(_id){
			Produtos.findByIdAndUpdate(_id, dados).exec().then(
				function (produtos){
					res.json(produtos);
				},
				function (erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else {
			Produtos.create(req.body).then(
				function(produtos){
					res.status(201).json(contato)
					
				},
				function(produtos){
					console.log("erro! "+erro);
					res.status(500).json(erro)
				}
			);

		}
	};



	return controller;
};
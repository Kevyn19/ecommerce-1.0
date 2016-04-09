
var sanitize = require('mongo-sanitize');

module.exports = function (app){
	var Produtos = app.models.produtos;
	var controller = {};

	//Lista todos os produtos
	controller.listaProdutos = function(req,res){
		Produtos.find({'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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

	//Lista todos os produtos por subgenero
	controller.listaProdutosBySubcategoria= function(req,res){
		Produtos.find({'tipoproduto.subcategoria': req.params.subcategoria, 'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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


	//Lista produtos por id
	controller.listaProdutosById = function(req,res){
		Produtos.find({'idProduto': req.params.id, 'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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

	//Lista o nome e o hexa da cor
	controller.listaProdutosByCor = function(req,res){

		Produtos.find({'cor.nome': req.params.cor, 'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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

	//Count de produtos de uma determinada cor
	controller.CountProdutosByCor = function(req,res){

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

	//Listar todas as cores
	controller.listaDistinctProdutosByCor = function(req,res){

		Produtos.distinct('cor.nome').exec()
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

	//Lista os produtos pela marca 
	controller.listaProdutosByMarca = function(req,res){

		Produtos.find({'marca': req.params.marca, 'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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

	//Count de produtos de uma determinada marca
	controller.CountProdutosByMarca = function(req,res){

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

	//Listar todas as marcas
	controller.listaDistinctProdutosByMarca = function(req,res){

		Produtos.distinct('marca').exec()
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

	//Lista os produtos pelo sexo 
	controller.listaProdutosBySexo = function(req,res){
		console.log(req.params);
		Produtos.find({'publicoalvo.sexo': req.params.sexo, 'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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

	//Count de produtos de um determinado sexo
	controller.CountProdutosBySexo = function(req,res){

		Produtos.count({ 'publicoalvo.sexo' : req.params.sexo }).exec()
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

	//Lista os produtos pelo sexo 
	controller.listaProdutosByFaixaEtaria = function(req,res){
		console.log(req.params);
		Produtos.find({'publicoalvo.faixaetaria': req.params.faixaetaria, 'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).exec()
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


	//Count de produtos de uma determinada faixa etaria
	controller.CountProdutosByFaixaEtaria = function(req,res){

		Produtos.count({ 'publicoalvo.faixaetaria' : req.params.faixaetaria }).exec()
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

	// Listar ordem alfabetica
	controller.listaProdutosOrdemAlfabetica = function(req,res){
		Produtos.find({'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).sort({'nome': -1}).exec()
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

	// Listar ordem menor/maior preco
	controller.listaProdutosOrdemPreco = function(req,res){

		Produtos.find({'estoque' : 1},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'promocao' : 1}).sort({'preco': req.params.preco}).exec()
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

	//Busca produtos por n filtros
	controller.filtros = function(req,res){
		var filtros = req.params.filtros.split(";");
		var cores = filtros[0].split(",");
		var marcas = filtros[1].split(",");
		var preco = filtros[2].split(",");

		if(preco[1] == 0){
			preco[0] = 0;
			preco[1] = 1000000;
		}

		if(marcas[0] == 'todas' && cores[0] == 'todas'){
			
			Produtos.find({'estoque' : 1,'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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
		}else if(marcas[0] != 'todas' && cores[0] == 'todas'){

			Produtos.find({'estoque' : 1,'marca': { $in:marcas} ,'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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
		}else if(marcas[0] != 'todas' && cores[0] != 'todas'){

			Produtos.find({'estoque' : 1,'marca': { $in:marcas} ,'cor.nome': { $in:cores},'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

	};

	// Cria/alterar produtos 
	controller.salvaProdutos = function(req,res){
		var _id = req.body._id;

			Produtos.find().sort({'idProduto': -1}).limit(1).exec()
			.then(
				function(produtos){
					console.log(produtos);
					console.log(produtos.length);

					if(produtos.length > 0){
						console.log('tem');
						console.log(produtos[0].idProduto);

						req.body.idProduto = produtos[0].idProduto + 1;
						
					}else{
						console.log('não tem');
						
						req.body.idProduto = 1;
					}

					var dados = {

					"idProduto" : req.body.idProduto,

					"nome": req.body.nome,

					"descricao": req.body.descricao,

					"preco": req.body.preco,

					"data": req.body.data,

					"foto": req.body.foto,

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

				},
				function(erro){
				   console.log(erro);
				   res.status(500).json(erro);
			}
		  );
		};

	return controller;
};

var sanitize = require('mongo-sanitize');
var Correios = require('node-correios');

module.exports = function (app){
	var Produtos = app.models.produtos;
	var controller = {};

	//****************************************************************************************************************************************************************************************************
	//****************************************************************************************************************************************************************************************************
	//
	//		Seviços para produtos - Area de user
	//
	//***************************************************************************************************************************************************************************************************
	//***************************************************************************************************************************************************************************************************

	//Lista todos os produtos
	controller.listaProdutos = function(req,res){
		Produtos.find({'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).exec()
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

	//Lista os ultimos 8 produtos
	controller.listaUltimosProdutos = function(req,res){
		Produtos.find({'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).sort({'idProduto': -1}).limit(8).exec()
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
		Produtos.find({'menu' : req.params.menuFiltro,'tipoproduto.categoria' : req.params.categoriaFiltro,'tipoproduto.subcategoria': req.params.tipoproduto.subcategoria, 'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).exec()
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
		Produtos.find({'idProduto': req.params.id, 'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1, 'loja' : 1, 'cep': 1}).exec()
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

	//Lista produtos por cor
	controller.listaProdutosByCor = function(req,res){

		Produtos.find({'cor.nome': req.params.cor, 'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).exec()
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

		Produtos.count({'menu': req.params.menu, 'tipoproduto.categoria' : req.params.categoria, 'tipoproduto.subcategoria' : req.params.subcategoria, 'cor.nome' : req.params.cor, 'estoque' : {$ne: 0} }).exec()
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

		Produtos.distinct('cor.nome', {'menu': req.params.menu, 'tipoproduto.categoria' : req.params.categoria, 'tipoproduto.subcategoria' : req.params.subcategoria, 'estoque' : {$ne: 0}}).exec()
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

		Produtos.find({'marca': req.params.marca, 'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).exec()
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

		Produtos.count({'menu': req.params.menu, 'tipoproduto.categoria' : req.params.categoria, 'tipoproduto.subcategoria' : req.params.subcategoria, 'marca' : req.params.marca, 'estoque' : {$ne: 0}}).exec()
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

		Produtos.distinct('marca', {'menu': req.params.menu, 'tipoproduto.categoria' : req.params.categoria, 'tipoproduto.subcategoria' : req.params.subcategoria, 'estoque' : {$ne: 0}}).exec()
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
		Produtos.find({'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).sort({'nome': -1}).exec()
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

		Produtos.find({'estoque' : {$ne: 0}},{'idProduto' : 1, 'nome' : 1,'preco' : 1, 'foto' : 1}).sort({'preco': req.params.preco}).exec()
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

	//Lista produtos relacionados
	controller.listaProdutosRelacionados = function(req,res){

		Produtos.find({'estoque' : {$ne: 0},'menu': req.params.menu, 'tipoproduto.categoria' : req.params.categoria, 'tipoproduto.subcategoria' : req.params.subcategoria}).sort({'idProduto': -1}).limit(6).exec()
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


	//Count de produtos de uma determinada categoria
	controller.CountProdutosByCategoria = function(req,res){

		Produtos.count({'menu': req.params.menu, 'tipoproduto.categoria' : req.params.categoria, 'estoque' : {$ne: 0}}).exec()
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

		console.log(filtros);

		var cores = filtros[0].split(",");
		var marcas = filtros[1].split(",");
		var preco = filtros[2].split(",");

		var menu = filtros[3];
		var categoria = filtros[4];
		var subcategoria = filtros[5];

		var ordem = filtros[6].split(",");
		var pagina = filtros[7].split(",");


		if(preco[1] == 0){
			preco[0] = 0;
			preco[1] = 1000000000;
		}

		if(ordem[0] == 'nome'){

			if(marcas[0] == 'todas' && cores[0] == 'todas'){

				
				Produtos.find({loja: req.params.loja,'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0}, 'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).sort({'preco': ordem[1]}).exec()
				.then(
					function(produtos){
						console.log("aqui");
					    res.json(produtos);
					},
					function(erro){
					   console.log(erro);
					   res.status(500).json(erro);
					}
			  	);
			}else if(marcas[0] != 'todas' && cores[0] == 'todas'){

				Produtos.find({loja: req.params.loja,'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).sort({'preco': ordem[1]}).exec()
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

				Produtos.find({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'cor.nome': { $in:cores},'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).sort({'preco': ordem[1]}).exec()
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

		}else if(ordem[0] == 'preco'){

			if(marcas[0] == 'todas' && cores[0] == 'todas'){
			
				Produtos.find({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).sort({'preco': ordem[1]}).exec()
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

				Produtos.find({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).sort({'preco': ordem[1]}).exec()
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
	

				Produtos.find({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria,'estoque' : {$ne: 0},'marca': { $in:marcas},'cor.nome': { $in:cores},'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).sort({'preco': ordem[1]}).exec()
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

		}else if(ordem[0] == 'like'){
			console.log('tetao');
			Produtos.find({loja: req.params.loja, 'nome': { $regex: req.params.nome },'estoque' : {$ne: 0},'preco': { $gte:preco[0], $lte:preco[1]}}).limit(pagina[1]*1).skip((pagina[0] * pagina[1]) - pagina[1]).exec()
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


	//Count de produtos por n filtros
	controller.CountProdutosFiltros = function(req,res){
		
		var filtros = req.params.filtros.split(";");

		var cores = filtros[0].split(",");
		var marcas = filtros[1].split(",");
		var preco = filtros[2].split(",");

		var menu = filtros[3];
		var categoria = filtros[4];
		var subcategoria = filtros[5];

		var ordem = filtros[6].split(",");
		var pagina = filtros[7].split(",");


		if(preco[1] == 0){
			preco[0] = 0;
			preco[1] = 1000000000;
		}


		if(ordem[0] == 'nome'){

			if(marcas[0] == 'todas' && cores[0] == 'todas'){
				
				Produtos.count({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0}, 'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

				Produtos.count({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

				Produtos.count({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'cor.nome': { $in:cores},'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

		}else if(ordem[0] == 'preco'){

			if(marcas[0] == 'todas' && cores[0] == 'todas'){
			
				Produtos.count({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

				Produtos.count({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

				Produtos.count({loja: req.params.loja, 'menu' : menu,'tipoproduto.categoria' : categoria,'tipoproduto.subcategoria': subcategoria, 'estoque' : {$ne: 0},'marca': { $in:marcas} ,'cor.nome': { $in:cores},'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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

		}else if(ordem[0] == 'like'){
			Produtos.count({loja: req.params.loja, 'nome': { $regex: req.params.nome },'estoque' : {$ne: 0},'preco': { $gte:preco[0], $lte:preco[1]}}).exec()
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


	}


	//Calcula frete e prazo de entrega
	controller.calculaFrete = function(req,res){
		 correios = new Correios();

		 idProduto = req.body.idProduto;

		 Produtos.find({'idProduto' : idProduto}).exec()
		.then(
			function(produtos){
				console.log(produtos[0].comprimento);

				var args = {
				"nCdServico" : '40010,41106,40215,40290,40045 ',
				"sCepOrigem" : produtos[0].cep,
				"sCepDestino" : req.body.CepDestino,
				"nVlPeso" :  produtos[0].peso,
				"nCdFormato" : produtos[0].formato,
				"nVlComprimento" : produtos[0].comprimento,
				"nVlAltura": produtos[0].altura,
				"nVlLargura" : produtos[0].largura,
				"nVlDiametro" : produtos[0].diametro,
				"nVlValorDeclarado": produtos[0].valorDeclarado
				}
		 
			 	console.log(args);
				correios.calcPrecoPrazo(args, function (err, result) {
				  

				  if(produtos[0].promocao.tipo == "Frete Gratis"){
				  	for (var i = 0; i < result.length; i++) {
				  		result[i].Valor = 0;
				  	}

				  }
				  console.log(result);
				  res.json(result);
				});
			},

			function(erro){
			   console.log(erro);
			   res.status(500).json(erro);
		}
	  );

	};



//****************************************************************************************************************************************************************************************************
//****************************************************************************************************************************************************************************************************
//
//		Seviços para produtos - Area de Admin
//
//****************************************************************************************************************************************************************************************************
//****************************************************************************************************************************************************************************************************

	// Cria/alterar produtos 
		controller.salvaProdutos = function(req,res){
			var _id = req.body._id;

			Produtos.find({'nome' : {$ne: null}}).sort({'idProduto': -1}).limit(1).exec()
			.then(
				function(produtos){
					console.log(produtos);
					console.log(produtos.length);

					if(produtos.length > 0){

						req.body.idProduto = produtos[0].idProduto + 1;
						
					}else{
						
						req.body.idProduto = 1;

					}

					Produtos.find({'menu' : req.body.menu,'tipoproduto.categoria' : req.body.tipoproduto.categoria, 'tipoproduto.subcategoria': req.body.tipoproduto.subcategoria }).exec()
						.then(
							function(produtos){
								if(produtos[0].nome == '' || produtos[0].nome == "" || produtos[0].nome == null){
									Produtos.remove({"_id":produtos[0]._id}).exec()
									.then(
										function(){
											
										},function(erro){
											return console.error(erro);
										}
									);
								}
							},
							function(erro){
							   console.log(erro);
							   res.status(500).json(erro);
							}
						 );

					var dados = {

					"idProduto" : req.body.idProduto,

					"nome": req.body.nome,

					"descricao": req.body.descricao,

					"preco": req.body.preco,

					"data": req.body.data,

					"foto": req.body.foto,

					"menu" : req.body.menu,

					"loja" : req.body.loja,

	 		  		"cep" : req.body.cep,

	 		  		"peso": req.body.peso,

				    "formato" : req.body.formato,

				    "comprimento" : req.body.comprimento,

				    "altura" : req.body.altura,

				    "largura" : req.body.largura,

				    "diametro" : req.body.diametro, 

				    "valorDeclarado" : req.body.valorDeclarado, 

					"tipoproduto" : {
						"categoria": req.body.tipoproduto.categoria,
			  			"subcategoria" : req.body.tipoproduto.subcategoria
					},

					"cor" : {
						"nome" : req.body.cor.nome,
			  			"hexa" : req.body.cor.hexa
					},

					"promocao" : {
				   		"nome" : req.body.promocao.nome,
	   					"tipo" : req.body.promocao.tipo
			   		},

			   		 "marca" : req.body.marca,

			  		 "estoque": req.body.estoque

				};

				 Produtos.create(dados).then(
					function(produtos){
						
						res.status(201).json(produtos)
						
					},
					function(produtos){
						console.log("erro! "+erro);
						res.status(500).json(erro)
					}
				);

				},
				function(erro){
				   console.log(erro);
				   res.status(500).json(erro);
			}
		 );
		};

	// Cria/alterar Menu 
	controller.salvaMenuProdutos = function(req,res){

		Produtos.find({'menu' : req.body.menu},{'idProduto' : 1}).exec()
		.then(
			function(produtos){
				if(produtos.length > 0){
					
				}else{

					var dados = {
						"menu" : req.body.menu,

						"loja" : req.body.loja

					};

					Produtos.create(req.body).then(
						function(produtos){
							res.status(201).json(produtos)
							
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

	//Listar todos os menus
	controller.listaDistinctProdutosByMenu = function(req,res){

		Produtos.distinct('menu',{loja: req.params.loja}).exec()
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

	//Altera o valor do menu nos produtos
	controller.updateProdutosByMenu = function(req,res){

		Produtos.update({'menu' : req.body.menu, 'loja' : req.body.loja},{ $set: { 'menu': req.body.menuNovo }}, {multi: true}).exec()
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


	// Cria/alterar Categoria 
	controller.salvaCategoriaProdutos = function(req,res){
		var _id = req.body._id;

		Produtos.find({'menu' : req.body.menu, 'tipoproduto.categoria' : req.body.tipoproduto.categoria },{'idProduto' : 1}).exec()
		.then(
			function(produtos){

				if(produtos.length > 0){
					
				}else{

					Produtos.find({'menu' : req.body.menu}).exec()
					.then(
						function(produtos){
							console.log(produtos);
							console.log(produtos[0].tipoproduto.categoria);
							if(produtos[0].tipoproduto.categoria == '' || produtos[0].tipoproduto.categoria == "" || produtos[0].tipoproduto.categoria == null){
								Produtos.remove({"_id":produtos[0]._id}).exec()
								.then(
									function(){
										
									},function(erro){
										return console.error(erro);
									}
								);
							}
						},
						function(erro){
						   console.log(erro);
						   res.status(500).json(erro);
						}
					  );


					var dados = {
						"menu" : req.body.menu,

						"tipoproduto" : {
							"categoria": req.body.tipoproduto.categoria,
					  		"subcategoria" : req.body.tipoproduto.subcategoria
						}

					};

					Produtos.create(dados).then(
						function(produtos){
							res.status(201).json(produtos);
							
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


	//Listar todas as categorias
	controller.listaDistinctProdutosByCategoria = function(req,res){
		Produtos.distinct('tipoproduto.categoria',{'menu' : req.params.menuFiltro, loja: req.params.loja} ).exec()
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

	//Altera o valor da categoria nos produtos
	controller.updateProdutosByCategoria = function(req,res){
		console.log(req.body.tipoproduto.categoria);
		console.log();

		Produtos.update({'tipoproduto.categoria' : req.body.tipoproduto.categoria, 'loja' : req.body.loja},{ $set: { 'tipoproduto.categoria': req.body.tipoproduto.categoriaNovo }}, {multi: true}).exec()
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


	//Cria/alterar Subcategoria 
	controller.salvaSubCategoriaProdutos = function(req,res){
		var _id = req.body._id;

		Produtos.find({'menu' : req.body.menu, 'tipoproduto.categoria' : req.body.tipoproduto.categoria, 'tipoproduto.subcategoria' : req.body.tipoproduto.subcategoria },{'idProduto' : 1}).exec()
		.then(
			function(produtos){
				console.log('teste '+ produtos);

				if(produtos.length > 0){
					
				}else{

					Produtos.find({'menu' : req.body.menu,'tipoproduto.categoria' : req.body.tipoproduto.categoria }).exec()
					.then(
						function(produtos){
							if(produtos[0].tipoproduto.subcategoria == '' || produtos[0].tipoproduto.subcategoria == "" || produtos[0].tipoproduto.subcategoria == null){
								Produtos.remove({"_id":produtos[0]._id}).exec()
								.then(
									function(){
										
									},function(erro){
										return console.error(erro);
									}
								);
							}
						},
						function(erro){
						   console.log(erro);
						   res.status(500).json(erro);
						}
					  );

					var dados = {
						"menu" : req.body.menu,

						"tipoproduto" : {
							"categoria": req.body.tipoproduto.categoria,
					  		"subcategoria" : req.body.tipoproduto.subcategoria
						}

					};
					
					Produtos.create(dados).then(
						function(produtos){
							res.status(201).json(produtos)
							
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


	//Listar todas as subcategoria
	controller.listaDistinctProdutosBySubcategoria = function(req,res){

		Produtos.distinct('tipoproduto.subcategoria',{'menu' : req.params.menuFiltro,'tipoproduto.categoria' : req.params.categoriaFiltro, loja: req.params.loja}).exec()
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

		//Altera o valor da categoria nos produtos
	controller.updateProdutosBySubcategoria = function(req,res){
		console.log(req.body.tipoproduto.categoria);
		console.log();

		Produtos.update({'tipoproduto.subcategoria' : req.body.tipoproduto.subcategoria , 'loja': req.body.loja},{ $set: { 'tipoproduto.subcategoria': req.body.tipoproduto.subcategoriaNovo }}, {multi: true}).exec()
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

	return controller;
};


	//****************************************************************************************************************************************************************************************************
	//****************************************************************************************************************************************************************************************************
	//
	//		Seviços para produtos - Commun
	//
	//***************************************************************************************************************************************************************************************************
	//***************************************************************************************************************************************************************************************************
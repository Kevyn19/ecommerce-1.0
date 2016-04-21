var model = require('../controllers/produtos');

	/*function verificaAutenticacao(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}else{
			res.status('401').json('You have no power here!');
		}
	}*/

module.exports = function (app){
	var controller = app.controllers.produtos;

	app.route('/produtos/')
		.post(controller.salvaProdutos)
		.get(controller.listaProdutos);

	app.route('/produtos/ultimos/:ultimos')
		.get(controller.listaUltimosProdutos);

	app.route('/produtos/produtosCount/:filtros/:nome/:loja')
		.get(controller.CountProdutosFiltros);

	app.route('/produtos/:id')
		.get(controller.listaProdutosById);

	app.route('/produtos/subcategoria/:subcategoria')
		.get(controller.listaProdutosBySubcategoria);

	app.route('/produtos/cor/:cor')
		.get(controller.listaProdutosByCor);

	app.route('/produtos/corCount/:menu/:categoria/:subcategoria/:cor')
		.get(controller.CountProdutosByCor);

	app.route('/produtos/distinctCor/:menu/:categoria/:subcategoria')
		.get(controller.listaDistinctProdutosByCor);

	app.route('/produtos/marca/:marca')
		.get(controller.listaProdutosByMarca);

	app.route('/produtos/marcaCount/:menu/:categoria/:subcategoria/:marca')
		.get(controller.CountProdutosByMarca);

	app.route('/produtos/distinctMarca/:menu/:categoria/:subcategoria')
		.get(controller.listaDistinctProdutosByMarca);

	app.route('/produtos/ordemAfabetica/:ordem')
		.get(controller.listaProdutosOrdemAlfabetica);

	app.route('/produtos/ordemPreco/:preco')
		.get(controller.listaProdutosOrdemPreco);

	app.route('/produtos/produtosRelacionados/:menu/:categoria/:subcategoria')
		.get(controller.listaProdutosRelacionados)
		
	app.route('/produtos/filtros/:filtros/:nome/:loja')
		.get(controller.filtros);

	app.route('/produtos/categoriaCount/:categoria/:menu')
		.get(controller.CountProdutosByCategoria);

	app.route('/produtos/calculaFrete/')
		.post(controller.calculaFrete);


	//Metodos para area de admin, vou mudar pra lá depois
	app.route('/produtos/menu/')
		.put(controller.updateProdutosByMenu)
		.post(controller.salvaMenuProdutos);

	app.route('/produtos/distinctMenu/:menu/:loja')
		.get(controller.listaDistinctProdutosByMenu);

	app.route('/produtos/categoria/')
		.put(controller.updateProdutosByCategoria)
		.post(controller.salvaCategoriaProdutos);

	app.route('/produtos/distinctCategoria/:menuFiltro/:loja')
		.get(controller.listaDistinctProdutosByCategoria);

	app.route('/produtos/subcategoria/')
		.put(controller.updateProdutosBySubcategoria)
		.post(controller.salvaSubCategoriaProdutos);

	app.route('/produtos/distinctSubcategoria/:menuFiltro/:categoriaFiltro/:loja')
		.get(controller.listaDistinctProdutosBySubcategoria);
		


	// Metedos em comun

};
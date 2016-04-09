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
		.get(controller.listaProdutos)
		.post(controller.salvaProdutos);

	app.route('/produtos/:id')
		.get(controller.listaProdutosById);

	app.route('/produtos/subcategoria/:subcategoria')
		.get(controller.listaProdutosBySubcategoria);

	app.route('/produtos/cor/:cor')
		.get(controller.listaProdutosByCor);

	app.route('/produtos/corCount/:cor')
		.get(controller.CountProdutosByCor);

	app.route('/produtos/distinctCor/:cor')
		.get(controller.listaDistinctProdutosByCor);

	app.route('/produtos/marca/:marca')
		.get(controller.listaProdutosByMarca);

	app.route('/produtos/marcaCount/:marca')
		.get(controller.CountProdutosByMarca);

	app.route('/produtos/distinctMarca/:cor')
		.get(controller.listaDistinctProdutosByMarca);

	app.route('/produtos/sexo/:sexo')
		.get(controller.listaProdutosBySexo);

	app.route('/produtos/sexoCount/:sexo')
		.get(controller.CountProdutosBySexo);

	app.route('/produtos/faixaetaria/:faixaetaria')
		.get(controller.listaProdutosByFaixaEtaria);

	app.route('/produtos/faixaetariaCount/:faixaetaria')
		.get(controller.CountProdutosByFaixaEtaria);

	app.route('/produtos/ordemAfabetica/:ordem')
		.get(controller.listaProdutosOrdemAlfabetica);

	app.route('/produtos/ordemPreco/:preco')
		.get(controller.listaProdutosOrdemPreco);
		
	app.route('/produtos/filtros/:filtros')
		.get(controller.filtros);

};
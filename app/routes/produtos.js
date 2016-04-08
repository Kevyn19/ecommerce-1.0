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

	app.route('/produtos/cor/:cor')
		.get(controller.listaProdutosCor);

	app.route('/produtosNome/cor/:cor')
		.get(controller.listaNomeProdutosCor);

	app.route('/produtos/corCount/:cor')
		.get(controller.CountProdutosCor);

	app.route('/produtosNome/marca/:marca')
		.get(controller.listaNomeProdutosMarca);

	app.route('/produtos/marcaCount/:marca')
		.get(controller.CountProdutosMarca);


	//app.route('/contatos/:id')
	//	.get(/*verificaAutenticacao,*/controller.obtemContato)
		//.delete(/*verificaAutenticacao,*/controller.removeContato);

};
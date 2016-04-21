var model = require('../controllers/carrinho');

	/*function verificaAutenticacao(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}else{
			res.status('401').json('You have no power here!');
		}
	}*/

module.exports = function (app){
	var controller = app.controllers.carrinho;

	app.route('/carrinho/')
		.post(controller.salvaCarrinho);

	app.route('/carrinho/:id')
		.get(controller.obtemCarrinho)
		.delete(controller.removeCarrinho);
	app.route('/carrinho/:user/:data')
		.get(controller.listaCarrinho);
	app.route('/carrinhoQuantidade/:user/:data')
		.get(controller.quantidadeCarrinho);
	app.route('/carrinhoSomaValor/:user/:data')
		.get(controller.SomaValorCarrinho);
	
	

};
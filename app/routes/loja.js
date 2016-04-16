var model = require('../controllers/loja');

	/*function verificaAutenticacao(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}else{
			res.status('401').json('You have no power here!');
		}
	}*/

module.exports = function (app){
	var controller = app.controllers.loja;

	app.route('/loja/')
		.post(controller.salvaLoja);
	app.route('/loja/buscarLoja/:loja')
		.get(controller.listaLoja);



};
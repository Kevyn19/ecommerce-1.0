var model = require('../controllers/carrossel');

	/*function verificaAutenticacao(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}else{
			res.status('401').json('You have no power here!');
		}
	}*/

module.exports = function (app){
	var controller = app.controllers.carrossel;

	app.route('/carrossel/')
		.post(controller.salvaCarrossel);
	app.route('/carrossel/buscarLoja/:loja')
		.get(controller.listaCarrossel);



};
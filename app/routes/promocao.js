var model = require('../controllers/promocao');

	/*function verificaAutenticacao(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}else{
			res.status('401').json('You have no power here!');
		}
	}*/

module.exports = function (app){
	var controller = app.controllers.promocao;

	app.route('/promocao/')
		.post(controller.salvaPromocao);
	app.route('/promocao/buscarPromocao/:nome')
		.get(controller.listaPromocao);



};
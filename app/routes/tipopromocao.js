var model = require('../controllers/tipopromocao');

	/*function verificaAutenticacao(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}else{
			res.status('401').json('You have no power here!');
		}
	}*/

module.exports = function (app){
	var controller = app.controllers.tipopromocao;

	app.route('/tipopromocao/')
		.post(controller.salvaTipopromocao)
		.get(controller.listaTipopromocao);
	app.route('/tipopromocao/:id')
		.delete(controller.removeTipopromocao);
	

};
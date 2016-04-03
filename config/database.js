var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.connect(uri);

	//mongoose.set('debug',true);

	mongoose.connection.on('connected',function(){
		console.log('Mongoose! Conectado em: '+uri)
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose! Disconectado de:'+uri)
	});

	mongoose.connection.on('error', function(erro){
		console.log('Mongoose! Erro na conexão: '+erro);
	});

	process.on('SIGINT',function(){
		mongoose.connection.close(function(){
			console.warn('Mongoose! Desconectado pelo término da aplicação'); 
			process.exit(0);
		})
	})
}
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function(){
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: 'a4ae61db3a62523488e9',
		clientSecret: 'f75d413fcc789a388368f66ae7543e45c2b5bb2a',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{"login":profile.username},
			{"nome":profile.username},
			function(erro,usuario){
				if(erro){
					console.log(erro);
					return done(erro)
				}

				return done(null,usuario);
			}
		);
	}));

	//serializa o usuario

	passport.serializeUser(function(usuario,done){
		done(null, usuario._id);
	});

	//deserializa o usuario
	//torna disponivel o req.user em qualquer controller
	passport.deserializeUser(function(id,done){
		Usuario.findById(id).exec().then(function(usuario){
			done(null,usuario);
		});
	});
};
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function(){
	var Usuario = mongoose.model('Usuario');

	passport.use(new FacebookStrategy({
		clientID: '586088288231878',
		clientSecret: 'c9abc8eb5a3be49fc8b31d0169425da5',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	}, function(accessToken, refreshToken, profile, done){
		console.log(profile);
		Usuario.findOrCreate(
			{"login":profile.displayName},
			{"nome":profile.displayName},
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
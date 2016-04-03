angular.module('contatooh').controller('ContatoController', 
  ["$scope", "$routeParams", "$resource", function($scope, $routeParams,$resource /*Contato*/){

  	var Contato = $resource('/contatos/:id');

    Contato.query(function(contatos){
      $scope.contatos = contatos;
    });

  	if($routeParams.contatoId){
	  	Contato.get({id : $routeParams.contatoId},
	  		function(contato){
	  			$scope.contato = contato;
	  			},
	  		function(erro){
	  			$scope.mensagem = {
	  				texto: "Não foi possivel pegar o contato"
	  			};
	  			console.log(erro);
	  		}
	  	);
	 }else{
	  $scope.contato = new Contato();	
	 }


  	$scope.salvar = function(){
      $scope.contato.$save().then(function(){
        $scope.mensagem = {texto:'Salvo com sucesso'}
        $scope.contato = new Contato();
      }).catch(function(){
        $scope.mensagem = {texto: 'Não foi possível salvar'};
      });
    }


  	
}]);
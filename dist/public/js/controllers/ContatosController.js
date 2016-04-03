angular.module('contatooh').controller('ContatosController', 
  ["$scope", "$resource", function($scope,$resource/*Contato*/){

  	$scope.contatos = [];

	$scope.filtro = '';

	$scope.mensagem = {texto : ''};

  	var Contato = $resource('/contatos/');
  	//console.log(Contato);

  	function buscaContatos(){
		Contato.query(
			function(contatos){
				$scope.contatos = contatos;
			},
			function(erro){
				console.log(error);
				$scope.mensagem = {
					texto : 'Não foi possivel obter a lista de contatos'
				}
				
			}
		);

  	};

  	buscaContatos();

	$scope.remove = function(contato){
		Contato.delete({id: contato._id},
		  buscaContatos,
		  function(erro){
		  	console.log(error);
			$scope.mensagem = {
				texto : 'Não foi possivel remover'
			}
		  }
		);
	};
  
}]);
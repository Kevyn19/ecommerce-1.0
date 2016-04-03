angular.module('contatooh').controller('ContatosController', 
  function($scope,$resource/*Contato*/){

  	$scope.contatos = [];

	$scope.filtro = '';

	$scope.mensagem = {texto : ''};

  	var Contato = $resource('/contatos/:id');
  	//console.log(Contato);

  	function buscaContatos(){
		Contato.query(
			function(contatos){
				$scope.contatos = contatos;
			},
			function(erro){
				console.log(erro);
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
		  	console.log(erro);
			$scope.mensagem = {
				texto : 'Não foi possivel remover'
			}
		  }
		);
	};
  
});
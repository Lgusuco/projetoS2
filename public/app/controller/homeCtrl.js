angular.module('s2Project')
.controller('homeCtrl', function($scope, homeApi) {

	$scope.message = false;
	$scope.sortType     = 'tipo'; 
 	$scope.sortReverse  = false; 

	$scope.operacao = {
		'tipo': 'Depositar'
	};

	$scope.insereValor = function (operacao) {
		if(operacao.tipo == 'Depositar') {
			if(operacao.valor !== null && operacao.valor > 0) {
				$scope.message = false;

				homeApi.insereValor(operacao)
				.then(function(response) {
					getlistaValorConta();
				},function (error){
					console.log('error');
				});
			} else {
				$scope.message = 'Deposito com valor Negativo ou Nulo';
			}
		} else {
			if(operacao.valor !== null && operacao.valor > 0 && operacao.valor <= $scope.total) {
				$scope.message = false;

				homeApi.insereValor(operacao)
				.then(function(response) {
					getlistaValorConta();
				},function (error){
					console.log('error');
				});
			} else {
				$scope.message = 'Saque com valor Negativo ou Nulo ou saldo insuficiente';				
			}
		}
	}

	function getlistaValorConta() {
		homeApi.getlistaValorConta()
		.then(function(response) {
			var total = 0;
			$scope.getlistaValorConta = response.data;

			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].tipo == 'Depositar')
					total += response.data[i].valor;
				else
					total -= response.data[i].valor;  
			}

			$scope.total = total;

		},function (error){

		});
	}

	$scope.removeItem = function (info) {
		var index = $scope.getlistaValorConta.indexOf(info);

		homeApi.removeItem(index)
		.then(function(response) {
			getlistaValorConta();
		},function (error){
			console.log('error');
		});
	}

	$scope.order = function(valor) {
		if(valor == 0)
			$scope.sortType     = 'tipo'; 
		else
			$scope.sortType     = 'valor'; 
		
		if($scope.sortReverse)
			$scope.sortReverse = false
		else
			$scope.sortReverse = true
	}


	getlistaValorConta();
});
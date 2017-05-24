angular.module('s2Project')
.service('homeApi', function($http){

	//LISTA OS VALORES REGISTRADOS
	this.getlistaValorConta = function () {
		return $http.get("/v1/caixa");
	};

	//INSERE UM NOVO VALOR
	this.insereValor = function (valor) {
		return $http.post("/v1/caixa", valor);
	};

	//REMOVER UM ITEM
	this.removeItem = function (item) {
		return $http.delete("/v1/caixa" + item);
	};

});

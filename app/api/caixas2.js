var api = {}

var listaValorConta = [

		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' },
		// { _id: 1, tipo: 'Saque', 'valor': '100' }
	];


api.listaValorConta = function(req, res) {
	res.json(listaValorConta);
	console.log(listaValorConta);
};


api.insereValor = function(req, res) {
	listaValorConta.push(req.body);
	res.json(listaValorConta);
};

api.removeItem = function(req, res) {
	listaValorConta.splice(req.params.item, 1);
	res.json(listaValorConta);
};

module.exports = api;
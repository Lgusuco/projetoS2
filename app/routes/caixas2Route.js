module.exports = function(app) {
	
	var api = app.api.caixas2, path = require('path');;

	app.route('/v1/caixa')
	.post(api.insereValor)
	.get(api.listaValorConta);

	app.route('/v1/caixa:item')
	.delete(api.removeItem);
};

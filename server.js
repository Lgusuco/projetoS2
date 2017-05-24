var http = require('http');
var app = require('./config/configExpress');
// require('./config/database')('mongodb://localhost/alurapic');

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor ON');
});

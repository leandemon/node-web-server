var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req, res) {
	res.send('This is the About Us page');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log("Exress server started on port " + PORT)
});
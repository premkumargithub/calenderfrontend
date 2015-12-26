var express = require('express'),
	app = express()
	path = require('path'),
	config = require('./app/config/api-config');

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(config.port, function () {
var host = server.address().address;
var port = server.address().port;

  console.log('Calender Angular running at http://%s:%s', host, port);
});
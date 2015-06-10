var server = require('./src/server'),
    data = require('./src/data'),
    app = server();

app.get('/', function (req, res) {
  res.render('index', data.get());
});

app.listen(3000, function () {
  var host = this.address().address || 'localhost';
  var port = this.address().port;

  console.log('app listening at http://%s:%s', host, port);
});

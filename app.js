var express = require('express');
var app = express();

app.use("/public", express.static('public'));
app.set('view engine', 'pug');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function (req, res) {
  console.log(process.env.PORT);
  res.render('index', { title: 'Hola', message: 'Hello José Luis!' });
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

//app.listen(8080);
//app.listen(process.env.PORT); //, process.env.IP);
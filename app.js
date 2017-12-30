var express = require('express');

var app = express();

app.use("/public", express.static('public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello José Luis!' });
});

app.listen(process.env.PORT, process.env.IP);
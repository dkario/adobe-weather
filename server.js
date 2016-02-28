var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

app.use('/assets', express.static(process.cwd() + '/build/assets'));

app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/build/index.html');
});

app.listen(port);

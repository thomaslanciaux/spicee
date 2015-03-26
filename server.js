var express = require('express');

var app = express();

app.post('/score', function(req, res) {
  res.send('Scored');
});

console.log('Simple score post demo server listening');
app.listen(3000, 'localhost');

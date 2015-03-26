var express = require('express');

var app = express();

app.post('/score', function(req, res) {
  setTimeout(function() {
    res.send('Scored');
  }, 1000);
});

console.log('Simple score post demo server listening');
app.listen(3000, 'localhost');

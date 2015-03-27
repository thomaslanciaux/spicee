var express = require('express');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/score', function(req, res) {
  setTimeout(function() {
    res.send('Scored');
  }, 1000);
});

console.log('Simple score post demo server listening');
app.listen(3000, 'localhost');

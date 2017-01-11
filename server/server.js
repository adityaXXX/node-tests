const express = require('express');

var app = express();

app.get('/', function(req, res){
  res.status(200).send("<h1>Hello World</h1>");
});

app.get('/users', function(req, res){
  res.status(200).send([{
    name: "Aditya",
    age: 20
  }, {
    name : "Mama",
    age : 20
  }]);
});

app.listen(3000, function(){
  console.log("The server is up on port 3000");
});

module.exports.app = app;

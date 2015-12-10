'use strict';
let express = require('express');
let path = require('path');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.get('/about', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/home', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(PORT, function() {
  console.log('server start on port ' + PORT);
});

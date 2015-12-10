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
app.get('/categories', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.get('/tags', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.get('/posts', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.get('/archives', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.get('/post', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/post/*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function() {
  console.log('server start on port ' + PORT);
});

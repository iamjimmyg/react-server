var express = require('express');
var app = express();


var port = 3000;

app.use('/', express.static('./'));

// app.get('/', function(req, res){
//   res.redirect('index');
// });

app.listen(port);

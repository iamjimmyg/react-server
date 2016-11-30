var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
//var mongodb = require('mongodb');
var mongoose = require('mongoose');
var User = require('./user.js');
//var apiRoute = require('./route.js');

mongoose.connect('mongodb://' + 'test' + ':' + 'test' + '@ds111188.mlab.com:11188/node_test');

var app = express();


var port = 3000;

//app.use(bodyParser.urlendcoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static('./'));

// app.get('/students', function(req, res){
//
// });
//endpoint. created message in frontend. sent to backend with axios
//saved to mongo db
app.post('/message', function(req, res){
  console.log('post success ', req.body);

  var student = new User({
    name: req.body.name,
    message: req.body.message
  });
  student.save(function(err){
    if(err) throw err;
    else {
      console.log('student saved to db!!');
    }
  });
});
//endpoint to grab all messages in db
app.get('/messages', function(req, res){
  User.find({}, function(err, result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});

app.delete('/delete/', function(req, res){
  User.findByIdAndRemove(req.body.id, function(err){
    if(err) throw err;
    console.log(req.body)
    res.send('successful delete' );
  })
});


//app.use('/api', apiRoute);

//mongoose.connect(config.getDbConnectionString());
// app.get('/', function(req, res){
//   res.redirect('index');
// });

app.listen(port);

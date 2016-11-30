var Todos = require('../models/todoModel');

module.exports = function(app) { //takes express app.. sets up endPoints
app.get('/api/setupTodos', function(req, res){
//seed database
  var starterTodos = [
    {
    username: 'test',
    todo: 'Buy milk',
    isDone: false,
    hasAttachment: false
    },
    {
    username: 'test',
    todo: 'Feed dog',
    isDone: false,
    hasAttachment: false
    },
    {
    username: 'Learn Node',
    todo: 'Buy milk',
    isDone: false,
    hasAttachment: false
    }
  ];
  Todos.create(starterTodos, function(err, results){
    res.send(results); //passes starterTodo as new Todos instance thru Schema
    });
  });
}

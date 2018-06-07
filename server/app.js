const express = require('express');
const morgan = require('morgan');

const app = express();

var mockData = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
  ];

// add your code here
//1. GET / responds with a 200 response code
app.get ('/', function (req, res){
res.status(200).send({status:"ok"})
});

//2. GET /api/TodoItems responds with all items
app.get ('/api/TodoItems',function (req, res){
res.status(200).send(mockData)
});

//3. POST /api/TodoItems responds with item, status 201
app.post ('/api/TodoItems', function (req, res){
res.status(201).send(mockData[0])
});

//4. DELETE /api/TodoItems/{id} responds with an item
app.delete ('/api/TodoItems/:number', function (req, res) {
res.status(200).send(mockData[0])
});

//5. GET /api/TodoItems/{id} responds with an item
app.get ('/api/TodoItems/:number', function (req, res){
res.status(200).send(mockData[1])

});

module.exports = app;

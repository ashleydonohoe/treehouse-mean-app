'use strict';

var Todo = require('./models/todo.js');

var todos = [
    'Feed the dog',
    'Walk the dog',
    'Clean up after the dog'
];

todos.forEach(function(todo, index) {
    Todo.find({'name': todo}, function(err, todos) {
        if(!err && !todos.length) {
            Todo.create({completed: false, name: todo});
        };
    });
});
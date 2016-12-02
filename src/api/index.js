'use strict';

var express = require("express");
var Todo = require("../models/todo");
// var todos = require('../../mock/todos.json');
var router = express.Router();

router.get("/todos", function(req, res) {
    Todo.find({}, function(err, todos) {
        if(err) {
            return res.status(500).json({message: err.message});
        } else {
            res.json({todos: todos});
        }
    });
});

router.post("/todos", function(req, res) {
    var todo = req.body;
    Todo.create(todo, function(err, todo) {
        if(err) {
            return res.status(500).json({err: err.message});
        }
        res.send({"todo": todo, message: "Todo created"});
    });
});

router.put("/todos/:id", function(req, res) {
    var id = req.params.id;
    var todo = req.body;
    if(todo && todo._id !== id) {
        return res.status(500).json({err: "ids don't match"});
    }

    Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
        if(err) {
            return res.status(500).json({err: err.message});
        }
        res.send({"todo": todo, message: "Todo updated"});
    });
});

//TODO: Add DELETE route to delete todos


module.exports = router;
'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
    if(err) {
        console.log("Failed due to this error: " + err);
    } else {}
        console.log("Database loaded fine");
});
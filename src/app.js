'use strict';

var express = require("express"),
    app     = express(),
    router  = require("./api"),
    parser  = require("body-parser");

require('./database');
require('./seed');

app.use(express.static('public'));
app.use(parser.json());
app.use("/api", router);


app.listen(3000, function(){
    console.log("Server is running!");
});
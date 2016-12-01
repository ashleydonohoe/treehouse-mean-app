'use strict';

var express = require("express"),
    app     = express(),
    router  = require("./api");

app.use(express.static('public'));
app.use("/api", router);

app.listen(3000, function(){
    console.log("Server is running!");
});
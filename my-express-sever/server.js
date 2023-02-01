//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(request, response){
    console.log(request);
    response.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: 2019uce0059@gmail.com.");
});

app.get("/about", function(req, res){
    res.send("I am final year student at IIT Jammu.");
});

app.get("/hobbies", function(req,res){
    res.send("I love reading, taking challenges.")
});

app.listen(3000, function(){
    console.log("server started on port 3000.");
});
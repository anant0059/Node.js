const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    var height = Number(req.body.num1);
    var weight = Number(req.body.num2);

    var BMI = weight / (height * height);

    res.send("Your BMI is "+BMI)
});

app.listen(3000, function(){
    console.log("server started on port 3000.");
});
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/about', function (req, res){
    res.sendFile(__dirname + "/html/about.html")
});

app.get('/projects', function(req, res) {
    res.send('Hello, here is my projects, look!')
});

app.get('/params/:name/:surname/:years', function(req, res) {
    console.log(req.params);
    res.send('Hello, my name is '+ req.params.name + " " + req.params.surname + ", I'm " + req.params.years + " years old.");
});

app.listen(8000);
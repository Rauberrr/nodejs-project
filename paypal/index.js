const express = require('express');
const ejs = require('ejs');
const BodyParser = require('body-parser');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(BodyParser.urlencoded({extended: false})); //receber dados de requisições do URL
app.use(BodyParser.json()); // e do json

app.use('/', require('./routes/index'));

app.listen(port, () => console.log('Listining in port ' + port));

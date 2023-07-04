const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//controlers

const Logar = require('./controlers/users/Logar')
const Logado = require('./controlers/users/Logado')
const Deslogar = require('./controlers/users/Deslogar')


//APP
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/pages', express.static(__dirname + '/pages'));

//database

const database = require('./database');

//pages
app.get('/', (req, res) => res.sendFile(__dirname+'/pages/index.html'));
app.get('/privado', (req, res) => res.send('only users logados'));

//routes
app.post('api/users/logar', async (req, res) => {
    res.send(await Logar(req.body));
});

app.get('api/users/deslogar', async (req ,res) => {
    res.send(await Deslogar());
});


//port
app.listen(3030, () => {
    console.log('servidor online');
});
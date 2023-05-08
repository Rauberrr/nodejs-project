const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//CONFIG

    //template engine

    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //mysql

    const sequelize = new Sequelize('first_test', 'root', 'ticoticonanana1.', {
        host: 'localhost',
        dialect: 'mysql'
    })

//ROTAS

    app.get('/cadastro', function(req, res){
        res.send('cadastro')
    });


app.listen(8000, function(){
    console.log('server listening in link: http://localhost:8000/')
});
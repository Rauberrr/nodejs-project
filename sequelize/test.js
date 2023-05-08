const Sequelize = require("sequelize");
const sequelize = new Sequelize('first_test', 'root', 'ticoticonanana1.', {
    host: 'localhost',  
    dialect: 'mysql'
});

const posts = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

// posts.create({
//     title: 'Once upon a time',
//     content: 'One little house in the middle of nowhere'
// });

// posts.sync({force: true})

const users = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    surname: {
        type: Sequelize.STRING
    },
    years: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// users.create({
//     name: 'Joca',
//     surname: 'Joca',
//     years: 20,
//     email: 'jocajoca@gmail.com'
// });

// users.sync({force: true})


// sequelize.authenticate().then(function(){
//     console.log('Successful connection to the database');
// }).catch(function(error){
//     console.log('Fail connect to the database, check out error: ' + error);
// })

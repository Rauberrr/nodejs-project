const mongoose = require('mongoose');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('uneUnifiedTopology', true);

mongoose.connect('mongodb+srv://rauber:rauber@cluster0.bsdb8fe.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('mongodb online');
    }).catch(erro => {
        console.log(erro);
    });

db = mongoose.Connection;

module.exports = db;
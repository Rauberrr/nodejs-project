const router = require('express').Router();
const paypal = require('paypal-rest-sdk');
const paypalConfig = require('../config/paypal.json');

paypal.configure(paypalConfig);

const products = require('../config/products.json');

router.get('/', (req, res) => res.render('index', {products}));

router.post('buy', (req, res) => {
    // clicar em comprar
    res.send({ success: true});
})

router.get('/success', (req, res) => {
    // pagar com sucesso
    res.send({ success: true});
})

router.get('/cancel', (req, res) => {
    res.send({ cancel: true });
})

module.exports = router;
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

// const user = require('../../../../../');

async function Logar(body){
    //recebe dados do usuario
    const email = body.email;
    const senha = body.senha;

    //verifica os dados
    if (!email || !senha) {
        return {erro: "dados insuficientes"}
    }


    //busca o usuario no banco
    Find = await user.find({email, senha})
    .then(response => {
        return response;
    }).catch(erro => {
        return {erro: erro}
    });

    //verifica se sencontrou
    if (Find == '' || Find.erro) {
        return {erro: "email ou senha incorretos"}
    }

    //se sencontrou gera token
    token = await jsonwebtoken.sign({
        id: Find[0]._id,
        nome: Find[0]._nome,
        email: Find[0]._email,
    }, 'SenhaParaProtegerOToken');

    //salva o token nos cookies do navegador

    resizeBy.cookie('Token', token);
    resizeBy.sendStatus(200);
}

module.exports = Logar;

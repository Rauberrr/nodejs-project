const jsonwebtoken = require('jsonwebtoken');

async function Logado(req, res, next){
    //pega os cookies do navegador
    Auth = req.cookie.Token || null

    //verifica se o cookie existe

    if(typeof(Auth) == 'undefined' || Auth == '' || Auth == 'null') {
        return res.send({erro: { login: "Nao autorizado"}});
    } else {

        //tenta traduzir o token.
        try {
            Token = await jsonwebtoken.verify(Auth, 'SenhaParaProtegerOToken');
            next();     
        } catch (error) {
            return res.send({erro: { login: "Nao autorizado"}});
    
        }
    }
}

module.exports = Logado;
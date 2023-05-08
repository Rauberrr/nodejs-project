const http = require('http');

http.createServer(function(req, res){
    res.end('Opa')
}).listen(8000);

console.log('The Server is functioning')
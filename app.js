const http  = require('http');




const server=http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
//process.exit();  you don't want to exit ur server !!

});

server.listen(3000);
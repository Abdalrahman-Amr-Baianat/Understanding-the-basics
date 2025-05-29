const http  = require('http');




const server=http.createServer((req,res)=>{
console.log(req);
//process.exit();  you don't want to exit ur server !!

});

server.listen(3000);
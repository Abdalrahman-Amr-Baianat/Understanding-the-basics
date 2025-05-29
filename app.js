const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
const url = req.url;
const method = req.method;

if (url === "/") {
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Enter message</title></head>');
res.write('<body><form action="/message" method="POST">');
res.write('<input type="text" name="message">');
res.write('<button type="submit">Send</button>');
res.write('</form></body>');
res.write('</html>');
return res.end();
}

if (url === '/message' && method === "POST"){
fs.writeFileSync('message.txt' , 'Dummy')
res.statusCode=302;
res.setHeader('Location' , '/')
return res.end()
}

res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1>Hello Node</h1></body>');
res.write('</html>');
res.end();
});

server.listen(3000);


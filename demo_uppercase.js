import http from 'http';
import { upperCase } from 'upper-case';

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(upperCase("Hello World!"));
  res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');

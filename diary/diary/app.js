const http = require('http');

// Variable goes here 😊
let count = 0;

const server = http.createServer((request, response) => {
  count++;
  response.write(`You are visitor number ${count}`);
  response.end();
});

server.listen(3000, () => {
  console.log('Visitor Counter running at http://localhost:3000');
});
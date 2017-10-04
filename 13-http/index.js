const http = require('http');
const fs = require('fs');

const extensions = {
  'jpg': 'image/jpeg',
  'css': 'text/css',
  'html': 'text/html',
  'js': 'text/javascript'
};

const responseWithFile = (response, file) => {
  const ext = file.split('.').slice(-1)[0];
  response.setHeader('Content-Type', `${extensions[ext]}; charset=utf-8`);
  fs.readFile(file, (err, content) => {
    if (err) throw err;
    response.write(content);
    response.end();
  });
};

const server = http.createServer();
server.on('request', function (request, response) {

  if (request.method === 'GET' && request.url === '/') {
    responseWithFile(response, './index.html');
  } else if (request.method === 'GET' && request.url.endsWith('.css')) {
     console.log("." + request.url);
     responseWithFile(response, "." + request.url);
  } else {
    response.statusCode = 404;
    responseWithFile(response, './404.jpg');
  }
});

server.listen(9000);
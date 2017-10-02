const http = require('http');
const fs = require('fs');

const extensions = {
  'jpg': 'image/jpeg',
  'css': 'text/css',
  'html': 'text/html',
  'js': 'text/javascript'
};

const responseWithFile = (response, file, contentType) => {
  const ext = file.split('.').slice(-1)[0];
  response.setHeader('Content-Type', `${contentType}; charset=utf-8`);
  fs.readFile(file, (err, content) => {
    if (err) throw err;
    response.write(content);
    response.end();
  });
};

const server = http.createServer();
server.on('request', function (request, response) {

  if (request.method === 'GET' && request.url === '/') {
    responseWithFile(response, './index.html', 'text/html');
   //  response.end();
  } else if (request.method === 'GET' && request.url.endsWith('.css')) {
     console.log("." + request.url);
     responseWithFile(response, "." + request.url);
  } else {
    response.statusCode = 404;
    responseWithFile(response, './404.jpg', 'image/jpg');
   //  response.end();
  }
//   response.end();
});

server.listen(9000);


// Where to put response.end?
// What about css files?